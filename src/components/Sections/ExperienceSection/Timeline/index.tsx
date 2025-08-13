"use client";

import { EXPERIENCES } from "@/constants/experiences";
import { cn } from "@/utils";
import { useGSAP } from "@gsap/react";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import gsap from "gsap";
import {
  EXPERIENCE_TIMELINE_ITEM_CLASS,
  EXPERIENCE_TIMELINE_ITEM_HIDDEN_STYLE,
} from "../constants";
import styles from "./index.module.css";

type TimelineProps = {
  className?: string;
};

const Timeline = ({ className }: TimelineProps) => {
  useGSAP(() => {
    const items = gsap.utils.toArray(`.${EXPERIENCE_TIMELINE_ITEM_CLASS}`);
    items.forEach((item) => {
      gsap.to(item as Element, {
        top: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: item as Element,
          start: "top 80%",
        },
      });
    });
  });

  return (
    <div className={cn(className, styles.timelineRoot)}>
      {EXPERIENCES.map((experience) => (
        <div
          key={experience.title}
          className={cn(
            styles.timelineItem,
            EXPERIENCE_TIMELINE_ITEM_CLASS,
            EXPERIENCE_TIMELINE_ITEM_HIDDEN_STYLE
          )}
        >
          <div className={styles.timelineItemLine} />
          <span className={styles.timelineItemPing}>
            <span
              className={cn(styles.timelineItemPingPulse, "animate-ping")}
            ></span>
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
