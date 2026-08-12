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
        colWidths=[6.1 * inch, 1.0 * inch],
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
    note = "Evidence-aligned portfolio résumé · simulation, hardware, team, upstream, and AI-assisted scopes are separated in linked case studies."
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
    story.append(entry_heading("Fort Lewis College — B.S. Computer Engineering", "May 2027", "Minors: Mathematics & Business Administration · GPA 3.65 · Upper-division GPA 3.8"))

    story.extend(section_heading("Research Experience"))
    story.append(KeepTogether([
        entry_heading("Research Assistant — Humanoid Robotics", "May 2026 – Present", "Fort Lewis College · Advisor: Dr. Yiyan Li · Independent undergraduate research"),
        bullet("Integrated the Booster K1 into VLN-CE-Isaac / NaVILA and completed all <b>1,077</b> R2R val-unseen simulation episodes: <b>18.3% success</b>, <b>30.3% oracle success</b>, 10.9% SPL, and 7.59 m final navigation error."),
        bullet("Decomposed outcomes into 751 never-reached, 129 reached-without-stopping, and 197 successful episodes, separating exploration from arrival recognition and motivating a controlled viewpoint study."),
        bullet("Extended upstream K1 training/deployment surfaces with environment configuration, reward and observation-contract checks, wrappers, validators, command filtering, and safety-aware mode handling; canonical results include per-episode artifacts and a public evidence ledger."),
    ]))
    story.append(Spacer(1, 2.2))
    story.append(KeepTogether([
        entry_heading("Independent Research — xembench", "2026", "Language-grounded manipulation across a Franka arm and Unitree G1 in ManiSkill3"),
        bullet("Designed and executed a two-embodiment benchmark with a canonical 21-D action interface, 1,202 demonstrations, 18 BC policies, and a <b>73-cell / 6,550-episode</b> baseline matrix; reported near-zero transfer under weak native precision policies."),
        bullet("Ran a failure-driven data round and intervention study; action chunking improved tool-pulling success from <b>1.3% to 14.7%</b> across three seeds, while grasp-critical tasks remained near zero. AI-assisted implementation is documented in the repository."),
    ]))
    story.append(Spacer(1, 2.2))
    story.append(KeepTogether([
        entry_heading("Research Assistant — NASA Colorado Robotics Challenge", "Oct 2025 – Apr 2026", "Fort Lewis College · Four-person team"),
        bullet("Led integration for an 18-DoF hexapod fielded at Great Sand Dunes; worked on Arduino/IMU/bump-sensor/power integration and a three-bit behavior interface, with team and inherited-code provenance stated publicly."),
        bullet("Built a later Python Kuramoto coupled-oscillator gait simulator and 34-test CI suite; the simulator is presented separately from the physical challenge firmware."),
    ]))
    story.append(Spacer(1, 2.2))
    story.append(KeepTogether([
        entry_heading("Research Assistant — AI & Robotics", "May – Sep 2025", "Fort Lewis College · Advisor: Dr. Kevin Wedeward · Solo project"),
        bullet("Restored legacy Sawyer and Baxter platforms, rebuilt a ROS Noetic / MoveIt / Gazebo workstation, and developed Blender/Python synthetic-data and YOLO inspection tooling; no unsupported detector metric or live closed-loop result is claimed."),
    ]))

    story.extend(section_heading("Selected Technical Work"))
    story.append(KeepTogether([
        entry_heading("KUKA KR 6 Kinematics & Verification", "2026", "Individual robotics course project; later packaged as a public library"),
        bullet("Implemented FK, closed-form position IK, a 6×6 geometric Jacobian, singularity diagnostics, inverse velocity kinematics, and trajectories; verified with finite differences, 200 random round trips, a generated URDF, and <b>39 tests</b>."),
    ]))
    story.append(KeepTogether([
        entry_heading("CLiDA LiDAR Debris Analysis", "Fall 2024", "Algorithm developer on a five-person design team"),
        bullet("Implemented point-cloud pruning/conversion, dimension, PCA-axis, motion, and ICP rotation-rate methods; final report records 1.009 and 3.004 RPM means with all 20 trials within ±0.2 RPM."),
    ]))

    story.extend(section_heading("Technical Skills"))
    skill_rows = [
        ("Languages", "Python, C++, Verilog, JavaScript / TypeScript, SQL, Bash"),
        ("Robot learning / AI", "PyTorch, behavior cloning, PPO, NaVILA, vision-language navigation, YOLO, experiment design"),
        ("Robotics", "Isaac Sim / Lab, ManiSkill3, MuJoCo, ROS / ROS 2, MoveIt, Gazebo, kinematics, motion planning"),
        ("Hardware / tools", "Arduino, FPGA / Vivado, PCB design, sensors, Git, Docker, Linux, AWS, PostgreSQL, Neo4j"),
    ]
    for label, value in skill_rows:
        story.append(Paragraph(f"<b>{label}:</b> {value}", BODY))

    story.extend(section_heading("Leadership & Honors"))
    story.append(Paragraph(
        "<b>Student Representative, FLC Strategic Implementation Committee</b> · <b>President & Co-Founder, Entrepreneurial Ventures Association</b> (8-person executive team; $1,500 in student micro-grants) · Physics & Engineering Symposium <b>2nd Place</b> (2025) · Dean's List (Spring 2026) · Goldman Sachs Emerging Leaders (2024)",
        BODY,
    ))

    doc.build(story)


if __name__ == "__main__":
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    build_resume()
    print(OUTPUT)
