import React from "react"
import renderer from "react-test-renderer"
import Greeter from "../src/greeter"

class MockCalc {

	hash() {
		return 0
	}

}

describe("Greeter should", () => {

	test("return greeting", () => {
		const component = renderer.create(
			<Greeter calc={new MockCalc()}/>
		)
		expect(component.toJSON()).toMatchSnapshot()
		component.unmount()
	})
})