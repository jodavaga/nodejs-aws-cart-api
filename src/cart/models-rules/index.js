"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateCartTotal = calculateCartTotal;
function calculateCartTotal(items) {
    return items.length
        ? items.reduce((acc, { product: { price }, count }) => {
            return (acc += price * count);
        }, 0)
        : 0;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLGdEQU1DO0FBTkQsU0FBZ0Isa0JBQWtCLENBQUMsS0FBaUI7SUFDbEQsT0FBTyxLQUFLLENBQUMsTUFBTTtRQUNqQixDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQVcsRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBWSxFQUFFLEVBQUU7WUFDcEUsT0FBTyxDQUFDLEdBQUcsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDUixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FydEl0ZW0gfSBmcm9tICcuLi9tb2RlbHMnO1xuXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlQ2FydFRvdGFsKGl0ZW1zOiBDYXJ0SXRlbVtdKTogbnVtYmVyIHtcbiAgcmV0dXJuIGl0ZW1zLmxlbmd0aFxuICAgID8gaXRlbXMucmVkdWNlKChhY2M6IG51bWJlciwgeyBwcm9kdWN0OiB7IHByaWNlIH0sIGNvdW50IH06IENhcnRJdGVtKSA9PiB7XG4gICAgICAgIHJldHVybiAoYWNjICs9IHByaWNlICogY291bnQpO1xuICAgICAgfSwgMClcbiAgICA6IDA7XG59XG4iXX0=