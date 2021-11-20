import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleLg">MeMa</span>
      </div>
      <img
        className="headerImg"
        src="https://images.unsplash.com/photo-1544957992-20514f595d6f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
        alt=""
      />
    </div>
  );
}
