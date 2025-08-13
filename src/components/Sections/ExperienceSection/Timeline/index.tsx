import { EXPERIENCES } from "@/constants/experiences";
import { cn } from "@/utils";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import styles from "./index.module.css";

type TimelineProps = {
  className?: string;
};

const Timeline = ({ className }: TimelineProps) => {
  return (
    <div className={cn(className, styles.timelineRoot)}>
      {EXPERIENCES.map((experience) => (
        <div key={experience.title} className={styles.timelineItem}>
          <div className={styles.timelineItemLine} />
          <span className={styles.timelineItemPing}>
            <span className={styles.timelineItemPingPulse}></span>
            <span className={styles.timelineItemPingDot}></span>
          </span>
          <div className={styles.timelineItemContentRow}>
            <div className={styles.timelineItemDateCol}>
              <div className={styles.timelineItemDate}>{experience.date}</div>
            </div>
            <div className={styles.timelineItemMainCol}>
              <div className={styles.timelineItemHeader}>
                <div className={styles.timelineItemTitleGroup}>
                  <h3 className={styles.timelineItemTitle}>
                    {experience.title}
                  </h3>
                  <div className={styles.timelineItemDateMobile}>
                    {experience.date}
                  </div>
                  <div className={styles.timelineItemCompany}>
                    @ {experience.company.name}
                  </div>
                </div>
                <div className={styles.timelineItemLogoWrapper}>
                  <experience.company.logo
                    className={styles.timelineItemLogo}
                  />
                </div>
              </div>
              <ul className={styles.timelineItemDescriptions}>
                {experience.descriptions.map((description) => (
                  <li
                    key={description}
                    className={styles.timelineItemDescription}
                  >
                    <PaperAirplaneIcon
                      className={styles.timelineItemBulletIcon}
                    />
                    <span>{description}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
