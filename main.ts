const EMAIL_USER = "mail";
const EMAIL_DOMAIN = "vchub.dev";
const EMAIL_TARGETS = ["email", "email-cta", "email-footer"];

function buildEmail(): string {
  return `${EMAIL_USER}@${EMAIL_DOMAIN}`;
}

function mountEmail(): void {
  const addr = buildEmail();
  for (const id of EMAIL_TARGETS) {
    const el = document.getElementById(id);
    if (el instanceof HTMLAnchorElement) el.href = `mailto:${addr}`;
  }
}

document.addEventListener("DOMContentLoaded", mountEmail);
