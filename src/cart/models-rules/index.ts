import { CartItem } from '../models';

export function calculateCartTotal(
  items: { product?: { price?: number } | null; count: number }[],
): number {
  if (!items || !items.length) {
    return 0;
  }

  return items.reduce((acc: number, item) => {
    const price = item?.product?.price ?? 0;
    return acc + price * item.count;
  }, 0);
}
