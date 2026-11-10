"""Generate the evidence-aligned PDF linked from the portfolio.

NOTE: public/resume.pdf is the final resume PDF (public copy, no phone number), copied in directly. This script carries the same text but not its exact layout; running it overwrites that file.

Requires ReportLab:
  python3 scripts/generate_resume.py
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
        "Durango, CO  ·  "
        "<link href='mailto:jangarabliss@gmail.com' color='#315fba'>jangarabliss@gmail.com</link>  ·  "
        "<link href='https://linkedin.com/in/jangarabliss' color='#315fba'>linkedin.com/in/jangarabliss</link>  ·  "
        "<link href='https://github.com/Janga786' color='#315fba'>github.com/Janga786</link>"
    )
    story.append(Paragraph(contact, SMALL))
    story.extend(section_heading("Education"))
    story.append(entry_heading("Fort Lewis College (FLC), Durango, CO | B.S. Computer Engineering", "Expected May 2027", "Minors in Mathematics and Business Administration | GPA 3.65 cumulative, 3.80 upper-division, 4.00 in Spring 2026 (17 cr.)"))
    story.append(Paragraph("<b>Coursework:</b> Intro to Robotics; Systems &amp; Control; CE 433 Embedded Devices (FPGA design); Digital Signal Processing; Engineering Statistics (calculus-based); Differential Equations; Calculus III. Completing before enrollment: Discrete Math, Analog Electronics, Linear Algebra, CE 432 Practical Robot Design, Semiconductor Fab (FLC nanolab).", BODY))

    story.extend(section_heading("Research &amp; Engineering Experience"))
    story.append(KeepTogether([
        entry_heading("Research Assistant, Humanoid Robot Intelligence", "May 2026 – Aug 2026", "Advisor: Dr. Yiyan Li | Booster K1 humanoid"),
        bullet("Built a two-tier stack: NaVILA, an 8B-parameter vision-language navigation model (~1 Hz), commanding a reinforcement-learning locomotion policy I trained in Isaac Sim/Isaac Lab (50 Hz; works in simulation only)."),
        bullet("Integrated the K1 into VLN-CE-Isaac and ran all 1,077 episodes; pipeline fixes and policy retraining (22 training runs, ~270 GPU-h) raised success from under 1% to 18.3% and more than doubled walking distance."),
        bullet("Ran a preregistered 2,400-episode ablation; two identically configured 300-episode runs agreed in aggregate (15.0% vs. 16.0%) yet disagreed on 11.0% of episodes (kappa 0.58); a fixed time limit cut off conditions unequally (2.0% vs. 12.3% of episodes)."),
        bullet("Deployed NaVILA live on the physical K1 for two natural-language episodes with zero teleoperation, via a relay I built (RTX 5090 VLM inference, ~350 ms; Booster SDK velocity control; Booster's built-in walker)."),
        bullet("Built a ROS 2 cart-seek stack (YOLO-World): K1 walks to a cart, stops ~1 m away, circles it to read a QR code; ~25 live runs."),
    ]))
    story.append(Spacer(1, 2.2))
    story.append(KeepTogether([
        entry_heading("Senior Design: Bridge Crack-Inspection Arm", "Sep 2026 – present", "Advisor: Dr. Yiyan Li | reBot B601-DM, solo build"),
        bullet("Brought up all seven motors (6+1 DoF) over CAN with a 200 Hz control loop (setpoint, stiffness, damping, feed-forward torque per motor); built the Jacobian, inverse kinematics, and a minimum-jerk planner, rehearsing new motion scripts in simulation before hardware runs."),
        bullet("Measured the elbow's gravity load with a slow torque test (6.6 N·m vs. 2.7 N·m in the URDF); gravity/friction feed-forward and gain tuning cut loaded-joint holding error from 0.04–0.05 rad to at most 0.005 rad (41 logged runs)."),
    ]))
    story.append(Spacer(1, 2.2))
    story.append(KeepTogether([
        entry_heading("Research Assistant, Computer Vision &amp; Robotics", "May 2025 – Sep 2025", "Advisor: Dr. Kevin Wedeward | Solo project"),
        bullet("Revived two non-functional Rethink robots (Sawyer, Baxter) with no vendor support: traced Sawyer's boot failure to a dead CMOS battery that had reset its BIOS into an incompatible Secure Boot setting, obtained the Intera update from other universities, and set up ROS 1/ROS 2 with Docker, MoveIt, and Gazebo."),
        bullet("Trained a YOLOv8 thermal hotspot detector on Blender synthetic data; with Baxter holding the camera, it flagged an induced hotspot on test panels every time. 2nd Place, FLC Physics &amp; Engineering Symposium (top solo project)."),
    ]))
    story.append(Spacer(1, 2.2))
    story.append(KeepTogether([
        entry_heading("Team Lead, Colorado Robotics Challenge (NASA Space Grant)", "Oct 2025 – Apr 2026", "Advisor: Dr. Charles Hakes"),
        bullet("Led a 4-person team; designed the electrical system of an 18-DoF hexapod (Arduino Mega, 9-DoF IMU, bump sensors, LiPo + SBEC power) and extended its firmware: gyro-magnetometer heading hold, gyro-bias calibration, bump avoidance."),
        bullet("Built a Kuramoto coupled-oscillator gait simulator (tripod, wave, ripple gaits from one system); open-sourced, 34-test CI."),
    ]))
    story.append(Spacer(1, 2.2))
    story.append(KeepTogether([
        entry_heading("Research Assistant, AI &amp; Data", "Aug 2024 – Oct 2025", "Advisor: Dr. Matthew Welz"),
        bullet("Built the FLC radio station's music-library database (Power Apps; designed for 60+ daily users), handed off and since deployed by the station on another platform from my work; prototyped embedding-based artist matching and LLM agents over Neo4j."),
    ]))

    story.extend(section_heading("Awards, Honors &amp; Programs"))
    story.append(Paragraph("2nd Place, FLC Physics &amp; Engineering Symposium (2025) | New Registered Student Organization of the Year (2023–24) | Katz School of Business Leadership Award (2024) | Goldman Sachs Emerging Leaders Series (2024) | Dean's List (2026)", BODY))

    story.extend(section_heading("Leadership &amp; Service"))
    story.append(bullet("<b>Co-Founder &amp; President, Entrepreneurial Ventures Association</b> (2023–24): led an 8-person executive team; ran a $1,500 micro-grant pitch competition; helped bring NASA's Technology Transfer University (T2U) program to campus."))
    story.append(bullet("<b>Student Representative, FLC Strategic Implementation Committee</b> (2025–26): one of four students working with the college president, trustees, and deans on the 2025–2030 Strategic Plan."))
    story.append(bullet("STEM Tutor (2024–25) | Chip Competition Manager, Nicholas Cisewski Memorial Golf Tournament for pediatric cancer research (2020–present)"))

    story.extend(section_heading("Skills"))
    skill_rows = [
        ("Control", "joint PD + gravity/friction feed-forward (200 Hz over CAN), Jacobian and damped-least-squares IK, minimum-jerk trajectories, IMU-fused heading hold, Kuramoto CPG gaits, RL locomotion (PPO, Isaac Lab)"),
        ("Robotics &amp; ML", "PyTorch, ROS 1/ROS 2, MoveIt, Isaac Lab, MuJoCo, Gazebo, NaVILA (VLN) deployment, YOLOv8/YOLO-World, Blender synthetic data, Open3D, LLM agents on Neo4j, AI coding agents &amp; orchestration (Claude Code, Codex, local LLMs)"),
        ("Hardware", "board bring-up, soldering, embedded C drivers (GPIO, PWM, ADC, UART), ATmega PCB design, CAN bus, oscilloscope, logic analyzer, FPGA (Verilog, Vivado)"),
        ("Programming", "Python, C++, C, Verilog, Cypher; Linux, Docker, Git | Spanish (conversational)"),
    ]
    for label, value in skill_rows:
        story.append(Paragraph(f"<b>{label}:</b> {value}", BODY))

    doc.build(story)


if __name__ == "__main__":
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    build_resume()
    print(OUTPUT)
