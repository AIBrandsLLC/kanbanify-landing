import React from 'react';
import FeatureSection from './FeatureSection';
import KanbanImg from '../../assets/kanban.png';
import ChatImg from '../../assets/chat.png';
import ReportingImg from '../../assets/reporting.png';

export default function Features() {
  return (
    <div id="features" className="bg-white dark:bg-slate-900 scroll-my-24">
      {/* Feature 1: Kanban */}
      <div id="kanban">
        <FeatureSection title="Kanban Boards" description="Visualize your work with flexible Kanban boards. Track tasks through custom stages and manage your project flow efficiently." image={KanbanImg} imageAlt="Kanban Board Screenshot" />
      </div>

      {/* Feature 2: Collaboration */}
      <div id="chat">
        <FeatureSection
          title="Team Collaboration"
          description="Facilitate team communication with integrated chat and discussions. Keep everyone aligned on project goals in real-time."
          image={ChatImg}
          imageAlt="Collaboration Interface"
          reverse
        />
      </div>

      {/* Feature 3: Reporting */}
      <div id="reporting">
        <FeatureSection title="Task Reporting" description="Generate simple reports to track task progress and team productivity. Get a clear view of your project status." image={ReportingImg} imageAlt="Reporting Dashboard" />
      </div>
    </div>
  );
}
