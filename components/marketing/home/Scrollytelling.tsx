export function Scrollytelling() {
  return (
    <section className="scrolly" id="features">
      <div className="wrap scrolly-grid">
        {/* sticky stage: visual swaps per step */}
        <div className="scrolly-sticky">
          <div className="scrolly-stage" id="stage">
            {/* 0 · PLAN */}
            <div className="sv on" data-sv="0">
              <div className="device">
                <div className="bar">
                  <span className="d r" />
                  <span className="d y" />
                  <span className="d g" />
                  <span className="url">Product Sprint · Board</span>
                </div>
                <div className="demo-board">
                  <div>
                    <div className="demo-col-h">
                      To do <span className="c">2</span>
                    </div>
                    <div className="dcard mover">
                      <span className="tag t-indigo">Design</span>
                      <p>Onboarding flow</p>
                      <div className="row">
                        <div className="davs">
                          <span className="dav ga" />
                        </div>
                        <span className="dmeta">KB-241</span>
                      </div>
                    </div>
                    <div className="dcard">
                      <span className="tag t-amber">Docs</span>
                      <p>API guide</p>
                      <div className="row">
                        <div className="davs">
                          <span className="dav gc" />
                        </div>
                        <span className="dmeta">KB-243</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="demo-col-h">
                      Doing <span className="c">1</span>
                    </div>
                    <div className="dcard">
                      <span className="tag t-rose">Bug</span>
                      <p>Drag latency</p>
                      <div className="row">
                        <div className="davs">
                          <span className="dav gb" />
                        </div>
                        <span className="dmeta">KB-238</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="demo-col-h">
                      Done <span className="c">6</span>
                    </div>
                    <div className="dcard">
                      <span className="tag t-green">Feat</span>
                      <p>Saved views</p>
                      <div className="row">
                        <div className="davs">
                          <span className="dav gd" />
                        </div>
                        <span className="dmeta">KB-231</span>
                      </div>
                    </div>
                  </div>
                  <svg className="ghost-cursor" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M5 3l14 7-6 1.5L10 18z" />
                  </svg>
                </div>
              </div>
            </div>
            {/* 1 · TALK */}
            <div className="sv" data-sv="1">
              <div className="device" style={{ maxWidth: 400, margin: "0 auto" }}>
                <div className="demo-chat">
                  <div className="dc-head">
                    <span className="dc-live" />
                    <div>
                      <div className="dc-nm">Sprint planning week 1</div>
                      <div className="dc-sub">recording · 2 in call</div>
                    </div>
                  </div>
                  <div className="callgrid">
                    <div className="ctile cv-a">
                      <span>Mara</span>
                    </div>
                    <div className="ctile cv-b t2">
                      <span>Devin</span>
                    </div>
                  </div>
                  <div className="dc-msgs">
                    <div className="dc-msg m2">
                      <span className="dav ga" />
                      <div className="dc-bub">
                        <b>Transcript</b>…bridge must ack within 200ms—
                      </div>
                    </div>
                    <div className="dc-msg m3">
                      <span className="dav gd" />
                      <div className="typing">
                        <i />
                        <i />
                        <i />
                      </div>
                    </div>
                  </div>
                  <div className="dc-in">
                    Linked to KB-230 · KB-238
                    <span className="snd">
                      <svg viewBox="0 0 20 20" fill="none">
                        <path
                          d="M3 10l14-6-6 14-2-6-6-2z"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* 2 · TRACK */}
            <div className="sv" data-sv="2">
              <div className="device" style={{ maxWidth: 400, margin: "0 auto" }}>
                <div className="bar">
                  <span className="d r" />
                  <span className="d y" />
                  <span className="d g" />
                  <span className="url">KB-230 · Task</span>
                </div>
                <div style={{ padding: 18 }}>
                  <div style={{ fontSize: 16, fontWeight: 800, color: "var(--ink)" }}>
                    Call bridge service
                  </div>
                  <div
                    style={{ fontSize: "12.5px", color: "var(--ink-3)", fontWeight: 600, marginTop: 3 }}
                  >
                    Review · assigned to Priya
                  </div>
                  <div className="lc-row" style={{ marginTop: 16 }}>
                    <span className="lc-ic chat">
                      <svg viewBox="0 0 20 20" fill="none">
                        <path
                          d="M4 5h12a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H8l-3 3v-3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z"
                          stroke="currentColor"
                          strokeWidth="1.7"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    #product-sprint thread<span className="grow">8</span>
                  </div>
                  <div className="lc-row">
                    <span className="lc-ic meet">
                      <svg viewBox="0 0 20 20" fill="none">
                        <rect x="3" y="6" width="10" height="8" rx="2" stroke="currentColor" strokeWidth="1.7" />
                        <path d="M13 9l4-2v6l-4-2" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
                      </svg>
                    </span>
                    Sprint planning · May 18<span className="grow">1h</span>
                  </div>
                  <div className="lc-row">
                    <span className="lc-ic meet">
                      <svg viewBox="0 0 20 20" fill="none">
                        <rect x="3" y="6" width="10" height="8" rx="2" stroke="currentColor" strokeWidth="1.7" />
                        <path d="M13 9l4-2v6l-4-2" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
                      </svg>
                    </span>
                    Design review · May 19<span className="grow">45m</span>
                  </div>
                  <div className="lc-row t">
                    <span className="lc-ic time">
                      <svg viewBox="0 0 20 20" fill="none">
                        <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.7" />
                        <path d="M10 6v4l3 2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                      </svg>
                    </span>
                    Time logged<span className="grow">4.0h</span>
                  </div>
                </div>
              </div>
            </div>
            {/* 3 · PROVE */}
            <div className="sv" data-sv="3">
              <div className="device">
                <div className="bar">
                  <span className="d r" />
                  <span className="d y" />
                  <span className="d g" />
                  <span className="url">Timesheet · 16–27 Sep</span>
                </div>
                <div className="tsheet">
                  <div className="ts-sum">
                    <div className="ts-chip hl">
                      <div className="l">Total</div>
                      <div className="v">
                        80.0<small>h</small>
                      </div>
                    </div>
                    <div className="ts-chip">
                      <div className="l">Done</div>
                      <div className="v">12</div>
                    </div>
                    <div className="ts-chip">
                      <div className="l">Avg / day</div>
                      <div className="v">
                        8.0<small>h</small>
                      </div>
                    </div>
                  </div>
                  <div className="ts-table">
                    <div className="ts-r person">
                      <span className="nm">
                        <svg className="ca" viewBox="0 0 20 20" fill="none">
                          <path
                            d="M5 8l5 5 5-5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span
                          className="av"
                          style={{ background: "linear-gradient(135deg,#6457f0,#9a90f6)" }}
                        />
                        Aayush Takkar
                      </span>
                      <span className="hrs">40.00h</span>
                    </div>
                    <div className="ts-r child">
                      <span className="nm">AI Talent</span>
                      <span className="hrs">20.00h</span>
                    </div>
                    <div className="ts-r child2">
                      <span className="nm">
                        Core Activity — Data Science
                        <span className="ts-pill">
                          <svg viewBox="0 0 20 20" fill="none">
                            <path
                              d="M8 12a3 3 0 0 0 4 0l3-3a3 3 0 0 0-4-4"
                              stroke="currentColor"
                              strokeWidth="1.7"
                              strokeLinecap="round"
                            />
                            <path
                              d="M12 8a3 3 0 0 0-4 0l-3 3a3 3 0 0 0 4 4"
                              stroke="currentColor"
                              strokeWidth="1.7"
                              strokeLinecap="round"
                            />
                          </svg>
                          2 mtgs
                        </span>
                      </span>
                      <span className="hrs">16.00h</span>
                    </div>
                    <div className="ts-r person">
                      <span className="nm">
                        <svg className="ca" viewBox="0 0 20 20" fill="none">
                          <path
                            d="M5 8l5 5 5-5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span
                          className="av"
                          style={{ background: "linear-gradient(135deg,#2f9f7a,#69c6a3)" }}
                        />
                        Nabila Qotrunnada
                      </span>
                      <span className="hrs">40.00h</span>
                    </div>
                    <div className="ts-r grand">
                      <span className="nm" style={{ paddingLeft: 8 }}>
                        Grand total
                      </span>
                      <span className="hrs">80.00h</span>
                    </div>
                  </div>
                  <div className="ts-export">
                    <svg viewBox="0 0 20 20" fill="none">
                      <path
                        d="M10 3v9m0 0l-3-3m3 3l3-3M5 16h10"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Export — one click
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* steps */}
        <div className="scrolly-steps">
          <div className="step active" data-step="0">
            <span className="num">
              <span className="dotn">1</span>Plan it
            </span>
            <h2>
              Map the work on <span className="hl">flexible boards.</span>
            </h2>
            <p>
              Kanban or Scrum, epics down to tasks. Drag a card and the whole team sees it move —
              this is the foundation everything else links back to.
            </p>
            <div className="progress">
              <i />
            </div>
          </div>
          <div className="step" data-step="1">
            <span className="num">
              <span className="dotn">2</span>Talk it
            </span>
            <h2>
              Hash it out in <span className="hl">chat &amp; calls.</span>
            </h2>
            <p>
              Encrypted chat and one-click video live right beside the board. Meetings record and
              transcribe themselves — ready to attach to the work they covered.
            </p>
            <div className="progress">
              <i />
            </div>
          </div>
          <div className="step" data-step="2">
            <span className="num">
              <span className="dotn">3</span>Track it
            </span>
            <h2>
              Link it all to <span className="hl">the task.</span>
            </h2>
            <p>
              Attach the chats and meetings that shaped a task, and log your time. Seconds of effort
              — and every task now remembers the work behind it.
            </p>
            <div className="progress">
              <i />
            </div>
          </div>
          <div className="step" data-step="3">
            <span className="num">
              <span className="dotn">4</span>Prove it
            </span>
            <h2>
              Get the report — <span className="hl">in one click.</span>
            </h2>
            <p>
              Kanbanify does the rest. Hours, tasks, and meetings roll up into a timesheet that
              writes itself: per person, per group, however you need it. Export and you&apos;re done.
            </p>
            <div className="progress">
              <i />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
