import { classNames } from './classNames'

describe('classNames', () => {
	test('with_only_first_param', () => {
		expect(classNames('someClass')).toBe('someClass')
	})

	test('with_additional_class', () => {
		const expected = 'someClass class1 class2'
		expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected)
	})

	test('with_both_mods_is_true', () => {
		const expected = 'someClass class1 class2 hovered scrollable'
		expect(
			classNames('someClass', { hovered: true, scrollable: true }, [
				'class1',
				'class2',
			])
		).toBe(expected)
	})

	test('with_one_mod_is_false', () => {
		const expected = 'someClass class1 class2 hovered'
		expect(
			classNames('someClass', { hovered: true, scrollable: false }, [
				'class1',
				'class2',
			])
		).toBe(expected)
	})

	test('with_one_mod_is_undefined', () => {
		const expected = 'someClass class1 class2 hovered'
		expect(
			classNames('someClass', { hovered: true, scrollable: undefined }, [
				'class1',
				'class2',
			])
		).toBe(expected)
	})
})
