export const SAKIL_WHATSAPP_RAW = '01784030922';
export const SAKIL_WHATSAPP_NUMBER = '8801784030922';

export function getWhatsAppCleanNumber(numberStr?: string): string {
  if (!numberStr) return SAKIL_WHATSAPP_NUMBER;
  let digits = numberStr.replace(/[^0-9]/g, '');
  if (digits.startsWith('01') && digits.length === 11) {
    digits = '88' + digits;
  }
  // If the number is something else or empty, default to Sakil's number
  if (!digits || digits.length < 9) {
    return SAKIL_WHATSAPP_NUMBER;
  }
  return digits;
}

export function getWhatsAppLink(numberStr: string, message?: string): string {
  const clean = getWhatsAppCleanNumber(numberStr);
  const query = message ? `?text=${encodeURIComponent(message)}` : '';
  return `https://wa.me/${clean}${query}`;
}
