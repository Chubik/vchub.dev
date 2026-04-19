const EMAIL_USER = "mail";
const EMAIL_DOMAIN = "vchub.dev";

function buildEmail(): string {
  return `${EMAIL_USER}@${EMAIL_DOMAIN}`;
}

function mountEmail(): void {
  const el = document.getElementById("email");
  if (!el) return;
  const addr = buildEmail();
  const link = document.createElement("a");
  link.href = `mailto:${addr}`;
  link.textContent = addr;
  link.className = "email-link";
  el.replaceChildren(link);
}

document.addEventListener("DOMContentLoaded", mountEmail);
