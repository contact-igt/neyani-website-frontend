import { CalendarCheck, ScanEye, ShieldCheck } from "lucide-react";
import styles from "./about.module.css";

export default function ImpactStats() {
  return (
    <div className={styles.impactStats} aria-label="Clinical care commitments">
      <article>
        <span><ScanEye size={36} aria-hidden="true" /></span>
        <div>
          <strong>Objective Diagnostics</strong>
          <p>Clinical decisions backed by precision diagnostic imaging and slit-lamp examinations.</p>
        </div>
      </article>
      <article>
        <span><ShieldCheck size={36} aria-hidden="true" /></span>
        <div>
          <strong>Transparent Guidance</strong>
          <p>Open discussions regarding treatment benefits, alternatives and expected recovery steps.</p>
        </div>
      </article>
      <article>
        <span><CalendarCheck size={36} aria-hidden="true" /></span>
        <div>
          <strong>Follow-Up Continuity</strong>
          <p>Structured post-procedure reviews to monitor recovery and protect visual outcomes.</p>
        </div>
      </article>
    </div>
  );
}
