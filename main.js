const EMAIL_USER = "mail";
const EMAIL_DOMAIN = "vchub.dev";

function mountEmail() {
  const el = document.getElementById("email");
  if (!el) return;
  const addr = `${EMAIL_USER}@${EMAIL_DOMAIN}`;
  const link = document.createElement("a");
  link.href = `mailto:${addr}`;
  link.textContent = addr;
  el.replaceChildren(link);
}

document.addEventListener("DOMContentLoaded", mountEmail);
