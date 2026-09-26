import { MessageCircle } from "lucide-react";
import { hospital } from "@/content/hospital";
import styles from "./WhatsAppFAB.module.css";

export default function WhatsAppFAB() {
  return (
    <a
      href={hospital.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.fab}
      aria-label="Book an appointment via WhatsApp"
    >
      <MessageCircle size={26} aria-hidden="true" />
      <span className={styles.label}>WhatsApp</span>
    </a>
  );
}
