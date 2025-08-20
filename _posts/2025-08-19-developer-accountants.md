---
layout: post
title: Developer accountants
date: 2025-08-19 20:57:33 +0100
categories:
  - tech
  - developer
  - accountants
  - excel
  - python
  - programming
---

## Contents

- [Accountants are *de facto* developers](#accountants-are-de-facto-developers)
- [Excel is programming](#excel-is-programming)
- [Formulas are functions](#formulas-are-functions)
- [Problem solving](#problem-solving)
- [Summary](#summary)
- [Getting started with Python in Excel](#getting-started-with-python-in-excel)

## Accountants are *de facto* developers

I first heard of [Developer Accountants](https://silverfin.com/resources/developer-accountant-intro/) from [Silverfin](https://silverfin.com/).

And it got me thinking... *most* accountants are *de facto* developers.

The *de jure* job title might suggest otherwise but when the daily activities of accountants are observed, a different picture emerges.

## Excel is programming

"[*...Excel is the world's most widely used functional programming language.*](https://www.microsoft.com/en-us/research/podcast/advancing-excel-as-a-programming-language-with-andy-gordon-and-simon-peyton-jones/)" - [Simon Peyton Jones](https://simon.peytonjones.org/)

<iframe width="420" height="315" src="https://youtube.com/shorts/YPSGL2MsES4?feature=shared" frameborder="0" allowfullscreen></iframe>

"[*...This pisses a lot of developers off because it turns out that people in the accounts department have been doing FP [Functional Programming] for longer than they have.*](https://youtube.com/shorts/YPSGL2MsES4?feature=shared)" - [Kevlin Henney](https://x.com/kevlinhenney?lang=en)

That's right.
Spreadsheets rule the profession.
In industry and practice, accountants use Excel every day.
Whether they know it or not, every time they type an Excel formula they are programming.

## Formulas are functions

A function is piece of code that takes something as an input, does something and returns an output.

Let's take a closer look at the first function most accountants learn: [SUM](https://support.microsoft.com/en-gb/office/sum-function-043e1c7d-7726-4e80-8f32-07b23e057f89)

When you type `=SUM(` into Excel it will display the interface for you:

```excel
SUM(number1, [number2], ...)
```

SUM is a function that takes one or more numbers and returns the result of adding them all together.

Let me show you what [sum](https://docs.python.org/3/library/functions.html#sum) looks like in [Python](https://www.python.org/) (one of the world's most popular programming languages):

```python
sum(iterable, /, start=0)
# Sums start and the items of an iterable from left to right and returns the total.
#The iterable’s items are normally numbers...
```

Doesn't look too different, does it?

But wait, what's an iterable?

Say you have the following data in Excel:

| |A|
|:-:|:-:|
|1|10|
|2|20|
|3|30|
|4|40|


When you use SUM in Excel, you probably don't type `=SUM(A1+A2+A3+A4)`. You probably use a cell range and type:

```excel
=SUM(A1:A4)
```

The cell range is an iterable. Each element in the cell range is a reference to a cell.

Here's the same in Python:

```python
>>> numbers = [10, 20, 30, 40]
>>> sum(numbers)
```

The only difference is that our iterable is a list of numbers (rather than a cell range).

## Problem solving

Okay, so that's a fairly simple example.

Developers solve complex problems with their programming. But how do they do that?

Well, how do you eat an elephant (personal aside: by the way, I'd rather you didn't eat elephants)? Piece by piece.

Developers break a single complex problem down into multiple simple problems, solving each one and stitching it all together.

Accountants often do the same in Excel.

Say you have the following data...

| |A|B|
|:-:|:-:|:-:|
|1|Email|Name|
|2|bob@example.com| |
|3|bill@example.com| |

...and you want to get the bit before the email domain (the name) for each cell. You could *nest* some formulas together...

```excel
=LEFT(A2,FIND("@",A2)-1)
```

...and then apply that to each cell (by dragging the formula down)...

| |A|B|
|:-:|:-:|:-:|
|1|Email|Name|
|2|bob@example.com|=LEFT(A2,FIND("@",A2)-1)|
|3|bill@example.com|=LEFT(A3,FIND("@",A3)-1)|

...giving you:

| |A|B|
|:-:|:-:|:-:|
|1|Email|Name|
|2|bob@example.com|bob|
|3|bill@example.com|bill|

What have we done to solve this more complex problem? We broke it down into the following steps:

1. `FIND("@",A2)`: Take the text in the cell reference (`A2`) and find the position of the *delimiter* (`"@"`) in that text. "@" is the fourth character in "bob@example.com"
2. Take the text in the cell reference (`A2`) and return the *n* characters (where n is the position of the delimiter less one, so that the delimiter is not included in the result).
Note: `=LEFT(A2,FIND("@",A2)-1)` evaluates to `=LEFT(A2,4-1)`
3. Do this *for each* cell.

How would a developer do the same in Python?

```python
>>> emails = [
      "bob@example.com",
      "bill@example.com",
    ]
>>> names = []
>>> for email in emails:
      names.append(email[:email.find("@")])
>>> names
['bob', 'bill']
```

Here the code preforms the following steps for each email in emails:

1. Find the position of the *delimiter* "@": `email.find("a")`
2. Take all the characters of email up to the delimiter's position: `email[:email.find("@")]` (for "bob@example.com" this evaluates to `email[:3]`, note that Python starts counting from 0; whereas Excel starts counting from 1)
3. Append these to the names list: `names.append(email[:email.find("@")])` (for "bob@example.com" this evaluates to `names.append("bob")`)

## Summary

Developers are people that use programming languages to solve problems.

A programming language is a digital tool that lets you write functions to solve a problem.

Excel is a digital tool that lets you write functions to solve a problem.

Therefore Excel is a programming language.

Accountants use Excel to solve problems.

Therefore accountants are developers.

## Getting started with Python in Excel

Perhaps you are an accountant and, recognizing that you are also a developer, you want to expand the programming languages that you already know.

[Python](https://www.python.org/about/gettingstarted/) can be fairly quick to pick up and if you might already have it available to you in Excel.

If you have "Insert Python" listed when you click "Formulas" in the Excel ribbon, you have Python in Excel (luck you!).

Read the [docs](https://support.microsoft.com/en-gb/office/get-started-with-python-in-excel-a33fbcbe-065b-41d3-82cf-23d05397f53d) and get practicing.

Let's do the above Python implementation again using Excel as our developer environment.

Say you have the following data...

| |A|B|
|:-:|:-:|:-:|
|1|Email|Name|
|2|bob@example.com| |
|3|bill@example.com| |

Start a Python function in cell `B2` by entering `=PY(`.

Now enter the following:

```python
email = xl("A2")  # Get the text from the cell reference
name = email[:email.find("@")]  # Get the name
```

Drag the cell formula down.

You'll end up with:

| |A|B|
|:-:|:-:|:-:|
|1|Email|Name|
|2|bob@example.com|\[PY\] bob|
|3|bill@example.com|\[PY\] bill|
