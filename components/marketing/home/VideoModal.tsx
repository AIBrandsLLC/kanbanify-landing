"use client";

export function VideoModal() {
  const close = () => window.closeVideo?.();

  return (
    <div className="vmodal" id="vmodal">
      <div className="scrim" onClick={close} />
      <div className="vbox">
        <button className="vclose" onClick={close} aria-label="Close">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
        <div className="vplayer">
          <div className="vstage">
            <span className="vlabel">
              <span className="rec" />
              Product preview
            </span>
            <div className="vscene">
              <div className="device">
                <div className="bar">
                  <span className="d r" />
                  <span className="d y" />
                  <span className="d g" />
                  <span className="url">Board</span>
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
              <div className="device" style={{ maxWidth: 230 }}>
                <div className="demo-chat">
                  <div className="dc-head">
                    <span className="dc-live" />
                    <div>
                      <div className="dc-nm">#sprint</div>
                      <div className="dc-sub">call active</div>
                    </div>
                  </div>
                  <div className="callgrid" style={{ gridTemplateColumns: "1fr 1fr" }}>
                    <div className="ctile cv-a">
                      <span>Mara</span>
                    </div>
                    <div className="ctile cv-b t2">
                      <span>Devin</span>
                    </div>
                  </div>
                  <div className="dc-msgs" style={{ minHeight: 60 }}>
                    <div className="dc-msg m2">
                      <span className="dav ga" />
                      <div className="dc-bub">
                        <b>Mara</b>On it 🎉
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="vbar">
            <i />
          </div>
          <div className="vcaption">
            Plan on the board · chat and call in the same place · ship faster
          </div>
        </div>
      </div>
    </div>
  );
}
