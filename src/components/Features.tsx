import React from 'react';
import FeatureSection from './FeatureSection';

export default function Features() {
  return (
    <div id="features" className="bg-white dark:bg-slate-900 scroll-my-24">
      {/* Feature 1: Kanban */}
      <div id="kanban">
        <FeatureSection
          title="Kanban Boards"
          description="Visualize your work with flexible Kanban boards. Track tasks through custom stages and manage your project flow efficiently."
          image="/assets/kanban.png"
          imageAlt="Kanban Board Screenshot"
        />
      </div>

      {/* Feature 2: Collaboration */}
      <div id="chat">
        <FeatureSection
          title="Team Collaboration"
          description="Facilitate team communication with integrated chat and discussions. Keep everyone aligned on project goals in real-time."
          image="/assets/chat.png"
          imageAlt="Collaboration Interface"
          reverse
        />
      </div>

      {/* Feature 3: Reporting */}
      <div id="reporting">
        <FeatureSection title="Task Reporting" description="Generate simple reports to track task progress and team productivity. Get a clear view of your project status." image="/assets/reporting.png" imageAlt="Reporting Dashboard" />
      </div>
    </div>
  );
}
