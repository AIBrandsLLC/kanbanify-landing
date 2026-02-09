import React from 'react';
import FeatureSection from './FeatureSection';
import KanbanImg from '../../assets/kanban.png';
import ChatImg from '../../assets/chat.png';
import ReportingImg from '../../assets/reporting.png';

export default function Features() {
  return (
    <div id="features" className="bg-background-light scroll-mt-16 space-y-0">
      <FeatureSection 
        title="Kanban Boards" 
        description="Visualize your work with flexible Kanban boards. Track tasks through custom stages and manage your project flow efficiently with zero friction." 
        image={KanbanImg} 
        imageAlt="Kanban Board Screenshot"
        badge="Core Feature"
      />

      <FeatureSection
        title="Team Collaboration"
        description="Facilitate team communication with integrated chat and discussions. Keep everyone aligned on project goals in real-time without leaving your board."
        image={ChatImg}
        imageAlt="Collaboration Interface"
        reverse
        badge="Real-time"
      />

      <FeatureSection 
        title="Task Reporting" 
        description="Generate simple reports to track task progress and team productivity. Get a clear view of your project status and identify bottlenecks instantly." 
        image={ReportingImg} 
        imageAlt="Reporting Dashboard"
        badge="Analytics" 
      />
    </div>
  );
}
