import site from './data/site.json';

export function waLink(board: string, subject: string, base?: string) {
  const who = /^GCSE/.test(subject) ? `a ${subject} tutor` : board ? `an ${board} ${subject} tutor` : `an A-level ${subject} tutor`;
  const text = `Hi Tom, I'm looking for ${who}.`;
  return `${base ?? `https://wa.me/${site.whatsapp}`}?text=${encodeURIComponent(text)}`;
}

export function waGeneral() {
  const text = `Hi Tom, I'm looking for an A-level tutor.`;
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
}

export const host = (u: string) => u.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');
export const joinList = (a: string[]) => a.length < 2 ? a.join('') : a.slice(0, -1).join(', ') + ' and ' + a[a.length - 1];

export const acuityUrl = (id: number) => `https://app.acuityscheduling.com/schedule.php?owner=24708936&appointmentType=${id}`;

import subjectsData from './data/subjects.json';
export function teamStats() {
  const info = subjectsData.flatMap((s: any) => Object.values(s.tutorInfo ?? {}) as string[]);
  return {
    tutors: info.length,
    examiners: info.filter((t) => /examiner/i.test(t)).length,
    heads: info.filter((t) => /head of/i.test(t)).length,
  };
}
