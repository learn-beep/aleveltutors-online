import site from './data/site.json';

export function waLink(board: string, subject: string) {
  const who = board ? `an ${board} ${subject} Tutor` : `an A-level ${subject} Tutor`;
  const text = `Hi, I'm looking for ${who}. The student is in Year ..... Their name is ..................... we would like ........ lessons per week, the best two times for tutoring are ................. and ......................`;
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
}

export function waGeneral() {
  const text = `Hi, I'm looking for an A-level Tutor. The subject is ........ The student is in Year ..... Their name is ..................... we would like ........ lessons per week, the best two times for tutoring are ................. and ......................`;
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
}

export const host = (u: string) => u.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');
export const joinList = (a: string[]) => a.length < 2 ? a.join('') : a.slice(0, -1).join(', ') + ' and ' + a[a.length - 1];

export const acuityUrl = (id: number) => `https://app.acuityscheduling.com/schedule.php?owner=24708936&appointmentType=${id}`;
