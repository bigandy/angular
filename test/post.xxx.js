describe('filter', function () {
		beforeEach(module('app'));

		describe('reverse', function() {
				it('shoud reverse a string', inject(function (reverseFilter) {
						expect(reverseFilter('ABCD')).toEqual('DCBA');
				}));
		});
});
