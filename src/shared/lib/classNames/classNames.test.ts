import { classNames } from './classNames'

describe('classNames', () => {
	test('should return only the first class name', () => {
		expect(classNames('someClass')).toBe('someClass')
	})

	test('should append additional classes', () => {
		const expected = 'someClass class1 class2'
		expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected)
	})

	test('should include all classes when modifiers are true', () => {
		const expected = 'someClass class1 class2 hovered scrollable'
		expect(
			classNames('someClass', { hovered: true, scrollable: true }, [
				'class1',
				'class2',
			])
		).toBe(expected)
	})

	test('should exclude class when modifier is false', () => {
		const expected = 'someClass class1 class2 hovered'
		expect(
			classNames('someClass', { hovered: true, scrollable: false }, [
				'class1',
				'class2',
			])
		).toBe(expected)
	})

	test('should exclude class when modifier is undefined', () => {
		const expected = 'someClass class1 class2 hovered'
		expect(
			classNames('someClass', { hovered: true, scrollable: undefined }, [
				'class1',
				'class2',
			])
		).toBe(expected)
	})
})
