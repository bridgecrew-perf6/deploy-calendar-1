import React from "react"
import renderer from "react-test-renderer"
import App from "../src/app"

class MockCalc {

	hash() {
		return 0
	}

}

describe("App should", () => {

	test("return greeting", () => {
		const component = renderer.create(
			<App calc={new MockCalc()}/>
		)
		expect(component.toJSON()).toMatchSnapshot()
		component.unmount()
	})
})