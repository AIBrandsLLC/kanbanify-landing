import React from 'react'
import FeatureSection from './FeatureSection'

const features = [
  { id: 'kanban', title: 'Kanban Board', desc: 'Flexible boards, swimlanes, WIP limits', icon: '/assets/kanban-icon.svg' },
  { id: 'chat', title: 'Secure Chat', desc: 'Team chat and threaded discussions', icon: '/assets/chat-icon.svg' },
  { id: 'report', title: 'Reporting', desc: 'Custom R&D reports and exports', icon: '/assets/report-icon.svg' },
]

export default function Features(){
  return (
    <div id="features" className="bg-white dark:bg-slate-900 scroll-my-24">
      {/* Feature 1: The Workflow */}
      <div id="kanban">
        <FeatureSection
          title="The Workflow: Kanban at Core"
          description="Visualize your work with our powerful Kanban board. Drag-and-drop tasks, set WIP limits to identify bottlenecks, and customize swimlanes to match your team's process."
          image="https://placehold.co/800x500/slate/white?text=Kanban+Board+Interface"
          imageAlt="Kanban Board Screenshot"
        />
      </div>

      {/* Feature 2: The Communication */}
      <div id="chat">
        <FeatureSection
          title="The Communication: Secure Chat"
          description="Stop switching context. Discuss tasks directly within the context of your work. Our secure, end-to-end encrypted chat ensures your IP remains safe while enabling seamless video calls and threaded discussions."
          image="https://placehold.co/800x500/indigo/white?text=Secure+Chat+Interface"
          imageAlt="Secure Chat Interface"
          reverse
        />
      </div>

      {/* Feature 3: The Result */}
      <div id="reporting">
        <FeatureSection
          title="The Result: R&D Audit Reports"
          description="Prepare for government funding and compliance audits with a single click. detailed time tracking logs, evidence exports, and automated reporting to save you weeks of administrative work."
          image="https://placehold.co/800x500/emerald/white?text=Audit+Report+Export"
          imageAlt="R&D Report Example"
        />
      </div>
    </div>
  )
}
