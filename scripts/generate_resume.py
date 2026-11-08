"""Generate the evidence-aligned PDF linked from the portfolio.

Run with the Codex bundled Python runtime (ReportLab is preinstalled there):
  /Users/janga/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/bin/python3 \
    scripts/generate_resume.py
"""

from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT, TA_RIGHT
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import (
    BaseDocTemplate,
    Frame,
    HRFlowable,
    KeepTogether,
    PageTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
)


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "public" / "resume.pdf"

INK = colors.HexColor("#172033")
MUTED = colors.HexColor("#4f5d73")
ACCENT = colors.HexColor("#315fba")
LINE = colors.HexColor("#cbd5e1")


def build_styles():
    styles = getSampleStyleSheet()
    body = ParagraphStyle(
        "Body",
        parent=styles["BodyText"],
        fontName="Helvetica",
        fontSize=8.05,
        leading=10.05,
        textColor=INK,
        spaceAfter=0,
    )
    small = ParagraphStyle(
        "Small",
        parent=body,
        fontSize=7.35,
        leading=8.9,
        textColor=MUTED,
    )
    bullet = ParagraphStyle(
        "Bullet",
        parent=body,
        leftIndent=10,
        firstLineIndent=-7,
        bulletIndent=0,
        spaceBefore=0.8,
        spaceAfter=0.6,
    )
    section = ParagraphStyle(
        "Section",
        parent=body,
        fontName="Helvetica-Bold",
        fontSize=8.2,
        leading=9.4,
        textColor=ACCENT,
        spaceBefore=4.5,
        spaceAfter=2.2,
        tracking=0.9,
    )
    entry = ParagraphStyle(
        "Entry",
        parent=body,
        fontName="Helvetica-Bold",
        fontSize=8.5,
        leading=10,
    )
    date = ParagraphStyle(
        "Date",
        parent=body,
        alignment=TA_RIGHT,
        fontSize=7.8,
        leading=10,
        textColor=MUTED,
    )
    return body, small, bullet, section, entry, date


BODY, SMALL, BULLET, SECTION, ENTRY, DATE = build_styles()


def section_heading(label: str):
    return [
        Spacer(1, 1.5),
        Paragraph(label.upper(), SECTION),
        HRFlowable(width="100%", thickness=0.55, color=LINE, spaceAfter=2.5),
    ]


def entry_heading(title: str, dates: str, subtitle: str | None = None):
    title_text = title if subtitle is None else f"{title}<br/><font name='Helvetica' color='#4f5d73' size='7.4'>{subtitle}</font>"
    table = Table(
        [[Paragraph(title_text, ENTRY), Paragraph(dates, DATE)]],
        colWidths=[5.95 * inch, 1.15 * inch],
        hAlign="LEFT",
    )
    table.setStyle(
        TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                ("TOPPADDING", (0, 0), (-1, -1), 0),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
            ]
        )
    )
    return table


def bullet(text: str):
    return Paragraph(f"• {text}", BULLET)


def footer(canvas, doc):
    canvas.saveState()
    canvas.setStrokeColor(LINE)
    canvas.setLineWidth(0.4)
    canvas.line(doc.leftMargin, 27, letter[0] - doc.rightMargin, 27)
    canvas.setFont("Helvetica", 6.7)
    canvas.setFillColor(MUTED)
    note = ""
    canvas.drawString(doc.leftMargin, 17, note)
    canvas.restoreState()


def build_resume():
    doc = BaseDocTemplate(
        str(OUTPUT),
        pagesize=letter,
        leftMargin=0.42 * inch,
        rightMargin=0.42 * inch,
        topMargin=0.30 * inch,
        bottomMargin=0.42 * inch,
        title="Jangara Bliss — Robotics and Computer Engineering Resume",
        author="Jangara Bliss",
        subject="Evidence-aligned graduate admissions portfolio resume",
    )
    frame = Frame(doc.leftMargin, doc.bottomMargin, doc.width, doc.height, id="resume")
    doc.addPageTemplates([PageTemplate(id="resume", frames=[frame], onPage=footer)])

    story = []
    story.append(Paragraph("JANGARA BLISS", ParagraphStyle(
        "Name", parent=BODY, fontName="Helvetica-Bold", fontSize=20, leading=21,
        textColor=INK, alignment=TA_LEFT, spaceAfter=1.5,
    )))
    contact = (
        "Durango, CO  ·  (423) 759-4044  ·  "
        "<link href='mailto:jangarabliss@gmail.com' color='#315fba'>jangarabliss@gmail.com</link>  ·  "
        "<link href='https://linkedin.com/in/jangarabliss' color='#315fba'>linkedin.com/in/jangarabliss</link>  ·  "
        "<link href='https://github.com/Janga786' color='#315fba'>github.com/Janga786</link>"
    )
    story.append(Paragraph(contact, SMALL))
    story.extend(section_heading("Education"))
    story.append(entry_heading("Fort Lewis College (FLC), Durango, CO — B.S. Computer Engineering", "Expected May 2027", "Minors in Mathematics and Business Administration · Cumulative GPA 3.65 · Upper-division GPA 3.80"))
    story.append(Paragraph("<b>Coursework:</b> Intro to Robotics; Systems &amp; Control; CE 433 Embedded Devices (FPGA design); Digital Signal Processing; Engineering Statistics (calculus-based); Differential Equations; Calculus III. Fall 2026: Linear Algebra, Discrete Math, Analog Electronics; Spring 2027: semiconductor fab (FLC nanolab).", BODY))
    story.append(Paragraph("<b>Embedded projects:</b> custom ATmega PCB design; FLC microcontroller-board bring-up with C drivers (GPIO, PWM, ADC, UART).", BODY))

    story.extend(section_heading("Research &amp; Engineering Experience"))
    story.append(KeepTogether([
        entry_heading("Research Assistant, Humanoid Robot Intelligence", "May 2026 – Aug 2026", "Advisor: Dr. Yiyan Li · Booster K1 humanoid"),
        bullet("Built a two-tier stack: NaVILA, an 8-billion-parameter vision-language navigation model (~1 Hz), commanding a reinforcement-learning locomotion policy I trained in Isaac Sim/Isaac Lab (50 Hz; simulation only)."),
        bullet("Integrated the K1 into the VLN-CE-Isaac benchmark and ran all <b>1,077</b> episodes; over 22 training runs (~270 GPU-hours) and pipeline fixes, including termination and camera-warmup fixes that more than doubled walking distance, raised success from under 1% to <b>18.3%</b>."),
        bullet("Ran a preregistered <b>2,400-episode</b> ablation: two identically configured 300-episode runs agreed in aggregate (15.0% vs. 16.0%) but disagreed on <b>11.0%</b> of episodes (Cohen's kappa = 0.58); a fixed time limit censored conditions unequally (2.0% vs. 12.3% timeouts)."),
        bullet("Built a relay (RTX 5090 VLM inference, ~350 ms; Booster SDK velocity control) that ran NaVILA live on the physical K1 for two natural-language episodes with zero teleoperation, using Booster's built-in walker."),
        bullet("Built a ROS 2 cart-seek stack (YOLO-World): walks the K1 to a cart, stops it ~1 m away (Booster's walker); ~25 live runs."),
    ]))
    story.append(Spacer(1, 2.2))
    story.append(KeepTogether([
        entry_heading("Senior Design: Bridge Crack-Inspection Robot Arm", "Sep 2026 – present", "Advisor: Dr. Yiyan Li · reBot B601-DM, 6+1 DoF"),
        bullet("Brought up all seven motors over CAN with a <b>200 Hz</b> control loop (setpoint, stiffness, damping, feed-forward torque per motor); built the Jacobian, inverse kinematics, and a minimum-jerk planner, testing every move in simulation first."),
        bullet("Measured the elbow's gravity load with an up-and-down torque test (6.6 N·m vs. 2.7 N·m in the URDF); gravity/friction feed-forward and gain tuning cut loaded-joint holding error from 0.04–0.05 to at most <b>0.005 rad</b> (41 logged runs)."),
    ]))
    story.append(Spacer(1, 2.2))
    story.append(KeepTogether([
        entry_heading("Research Assistant, Computer Vision &amp; Robotics", "May 2025 – Sep 2025", "Advisor: Dr. Kevin Wedeward · Solo project"),
        bullet("Revived two non-functional Rethink robots (Sawyer, Baxter) with no vendor support: traced Sawyer's boot failure to a dead CMOS battery that had reset its BIOS into an incompatible Secure Boot setting, got the needed Intera update through outreach to other universities, and set up ROS 1/ROS 2 with Docker, MoveIt, and Gazebo."),
        bullet("Trained a YOLOv8 solar-panel thermal hotspot detector with a Blender synthetic-data pipeline and checked it qualitatively on real panels; <b>2nd place</b>, FLC Physics &amp; Engineering Symposium, the highest-placing solo project."),
    ]))
    story.append(Spacer(1, 2.2))
    story.append(KeepTogether([
        entry_heading("Team Lead, Colorado Robotics Challenge (NASA Space Grant)", "Oct 2025 – Apr 2026", "Advisor: Dr. Charles Hakes"),
        bullet("Led a 4-person team; designed the electrical system of an 18-DoF hexapod (Arduino Mega, 9-DoF IMU, bump sensors, LiPo + SBEC power) and extended its firmware: gyro-magnetometer heading hold, gyro-bias calibration, bump avoidance."),
        bullet("Built a Kuramoto coupled-oscillator gait simulator (tripod, wave, ripple gaits from one system); open-sourced, <b>34-test</b> CI."),
    ]))
    story.append(Spacer(1, 2.2))
    story.append(KeepTogether([
        entry_heading("Research Assistant, AI &amp; Data", "Aug 2024 – Oct 2025", "Advisor: Dr. Matthew Welz"),
        bullet("Built a Power Apps music-library database with the FLC radio station, designed for 60+ daily users (handed off pre-deployment); prototyped embedding-based artist-name matching and LLM agents querying a Neo4j graph in natural language."),
    ]))

    story.extend(section_heading("Awards, Honors &amp; Programs"))
    story.append(Paragraph("2nd Place, FLC Physics &amp; Engineering Symposium (2025) · Katz School of Business Leadership Award (2024) · New Registered Student Organization of the Year (2023–24) · Goldman Sachs Emerging Leaders Series (2024)", BODY))

    story.extend(section_heading("Leadership &amp; Service"))
    story.append(bullet("<b>Co-Founder &amp; President, Entrepreneurial Ventures Association</b> (2023–24): led an 8-person executive team; ran a pitch competition allocating $1,500 in micro-grants; brought NASA's Technology Transfer University (T2U) program to campus."))
    story.append(bullet("<b>Student Representative, FLC Strategic Implementation Committee</b> (2025–26): one of four students working with the college president, trustees, and deans on the 2025–2030 Strategic Plan."))
    story.append(bullet("STEM Tutor (2024–25) · Chip Competition Manager, Nicholas Cisewski Memorial Golf Tournament for pediatric cancer research (2020–present)"))

    story.extend(section_heading("Skills"))
    skill_rows = [
        ("Robotics &amp; ML", "PyTorch, reinforcement learning, Isaac Sim/Isaac Lab, MuJoCo, ROS 1/ROS 2, MoveIt, Gazebo, YOLOv8, YOLO-World, Open3D"),
        ("Control &amp; Hardware", "PD and feed-forward motor control over CAN, trajectory planning, board bring-up, soldering, embedded C drivers (GPIO, PWM, ADC, UART), ATmega board design, oscilloscope, logic analyzer, FPGA (Vivado)"),
        ("Programming", "Python, C++, C, Verilog, SQL; Linux, Docker, Git · Spanish (conversational)"),
    ]
    for label, value in skill_rows:
        story.append(Paragraph(f"<b>{label}:</b> {value}", BODY))

    doc.build(story)


if __name__ == "__main__":
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    build_resume()
    print(OUTPUT)
