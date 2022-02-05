import "./index.scss"
import "bootstrap"

import React from "react"
import ReactDOM from "react-dom"

import App from "./app"

const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Ноябрь", "Декабрь"]

const zodiacsAndMonths = [
	{title: "♈", dates: "21 марта - 20 апреля"},
	{title: "♉", dates: "21 апреля - 21 мая"},
	{title: "♊", dates: "22 мая - 21 июня"},
	{title: "♋", dates: "22 июня - 22 июля"},
	{title: "♌", dates: "23 июля - 21 августа"},
	{title: "♍", dates: "22 августа - 23 сентября"},
	{title: "♎", dates: "24 сентября - 23 октября"},
	{title: "♏", dates: "24 октября - 22 ноября"},
	{title: "♐", dates: "23 ноября - 22 декабря"},
	{title: "♑", dates: "23 декабря - 20 января"},
	{title: "♒", dates: "21 января - 19 февраля"},
	{title: "♓", dates: "20 февраля - 20 марта"}
]

const date = new Date()
const currentMonth = `${months[date.getMonth()]} ${date.getFullYear()} г.`

ReactDOM.render(<App date={date} month={currentMonth} zodiacsAndMonths={zodiacsAndMonths}/>, document.getElementById("app"))