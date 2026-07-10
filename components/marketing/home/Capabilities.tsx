export function Capabilities() {
  return (
    <section className="hscroll" id="capabilities">
      <div className="hscroll-pin">
        <div className="hscroll-head">
          <span className="eyebrow">
            <span className="d" style={{ background: "#a79dfb" }} />
            All in one place
          </span>
          <h2>Everything your team needs, connected.</h2>
          <p>Scroll across — every piece feeds the same report.</p>
        </div>
        <div className="hscroll-viewport">
          <div className="hscroll-track" id="htrack">
            <div className="hcard hc-1">
              <div className="glow" />
              <div className="hc-ic">
                <svg viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="4" width="5" height="16" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
                  <rect x="10" y="4" width="5" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
                  <rect x="17" y="4" width="4" height="13" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
                </svg>
              </div>
              <h3>Boards &amp; sprints</h3>
              <p>Kanban and Scrum with epics, backlog, swimlanes, and story points.</p>
              <div className="tagrow">
                <span className="tg">Kanban</span>
                <span className="tg">Scrum</span>
                <span className="tg">Epics</span>
              </div>
            </div>
            <div className="hcard hc-2">
              <div className="glow" />
              <div className="hc-ic">
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 5h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H9l-4 3v-3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3>Encrypted chat</h3>
              <p>Threads and rooms per project — readable only by the people in them.</p>
              <div className="tagrow">
                <span className="tg">E2E</span>
                <span className="tg">Threads</span>
              </div>
            </div>
            <div className="hcard hc-3">
              <div className="glow" />
              <div className="hc-ic">
                <svg viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="6" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.7" />
                  <path d="M15 10l5-3v10l-5-3" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
                </svg>
              </div>
              <h3>Calls &amp; recordings</h3>
              <p>One-click video that records and transcribes itself, ready to link to tasks.</p>
              <div className="tagrow">
                <span className="tg">Video</span>
                <span className="tg">Transcripts</span>
              </div>
            </div>
            <div className="hcard hc-4">
              <div className="glow" />
              <div className="hc-ic">
                <svg viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" />
                  <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </div>
              <h3>Time logging</h3>
              <p>Log hours on tasks as you work — no separate timesheet to fill in.</p>
              <div className="tagrow">
                <span className="tg">Per task</span>
                <span className="tg">Auto roll-up</span>
              </div>
            </div>
            <div className="hcard hc-5">
              <div className="glow" />
              <div className="hc-ic">
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 19V5M4 19h16M8 16V9M12 16V6M16 16v-4"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3>Timesheet &amp; reports</h3>
              <p>Per-person and per-group reports that write themselves. Export in one click.</p>
              <div className="tagrow">
                <span className="tg">Per person</span>
                <span className="tg">XLSX</span>
              </div>
            </div>
            <div className="hcard hc-1">
              <div className="glow" />
              <div className="hc-ic">
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 3l7 3v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3z"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 12l2 2 4-4"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3>Security &amp; SSO</h3>
              <p>End-to-end encryption, SSO, audit logs, and a DPA for your organisation.</p>
              <div className="tagrow">
                <span className="tg">SSO</span>
                <span className="tg">Audit logs</span>
              </div>
            </div>
          </div>
        </div>
        <div className="hscroll-rail" id="hrail">
          <i className="on" />
          <i />
          <i />
          <i />
          <i />
          <i />
        </div>
      </div>
    </section>
  );
}
