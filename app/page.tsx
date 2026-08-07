import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jihea Yu",
  description: "M.S. student at Seoul National University researching usable and responsible language models.",
};

export default function Home() {
  return <main className="home"><section className="intro"><img className="portrait" src="/jihea-yu.jpg" alt="Portrait of Jihea Yu" /><div className="intro-copy"><p className="kicker">Hello, I’m</p><h1>Jihea Yu.</h1><p className="affiliation">M.S. student in Intelligence and Information<br />Seoul National University</p><p className="bio">I am interested in improving the <strong>usability of large language models</strong> and exploring how we can develop and use AI more responsibly.</p><div className="links"><a href="mailto:jihyeyu33@snu.ac.kr">Email</a><a href="https://github.com/jhyeyu33" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/yujihea/" target="_blank" rel="noreferrer">LinkedIn ↗</a></div></div></section><section className="news"><div className="section-heading"><p className="kicker">What’s new</p><h2>News</h2></div><ol className="news-list"><li><time>Mar. 2026</time><p>Started my M.S. in Intelligence and Information at Seoul National University.</p></li><li><time>Dec. 2025</time><p>Completed my bachelor’s thesis on generating type-specific clarification questions for ambiguous queries.</p></li><li><time>Jun. 2025</time><p>Received the Empathy Popularity Award at the Tech for Impact Campus Achievement Presentation.</p></li><li><time>Feb. 2025</time><p>Completed an undergraduate research internship at the SNU Natural Language Processing Lab.</p></li></ol></section></main>;
}
