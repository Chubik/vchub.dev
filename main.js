const EMAIL_USER = "mail";
const EMAIL_DOMAIN = "vchub.dev";
const EMAIL_TARGETS = ["email", "email-cta", "email-footer"];

function mountEmail() {
  const addr = `${EMAIL_USER}@${EMAIL_DOMAIN}`;
  for (const id of EMAIL_TARGETS) {
    const el = document.getElementById(id);
    if (el instanceof HTMLAnchorElement) el.href = `mailto:${addr}`;
  }
}

document.addEventListener("DOMContentLoaded", mountEmail);
