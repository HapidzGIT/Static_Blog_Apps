---
title: "Building a QR code micro-app"
subtitle: "Build a serverless 'hello-world' QR code app with Python and AWS."
date: "2021-08-14"
---

Ever since the pandemic started, I've noticed QR codes creeping into my daily life. Venue check-ins, digital menus at restaurants, and online payments.

I thought it'd be fun to explore the technology a little bit, so I've built a micro web-app that lets you save messages and view them later using a QR code. Sort of a "Hello World" QR code project.

In this post, I'll be sharing how I built this using Python and AWS free tier.

You can try out the [app itself here](https://qr.pixegami.com/). The [source code](https://github.com/pixegami/qr-code-webapp) is also available on GitHub.

![images/keychron-k2-product_1400x.jpg](images/keychron-k2-product_1400x.jpg)

## What is a QR Code?

We've all seen and used them before, but how does a QR code actually work? The first thing to understand is that it is an [internationally standardized specification](https://www.iso.org/obp/ui/#iso:std:iso-iec:18004:ed-3:v1:en):

> This International Standard [...] specifies the QR Code symbology characteristics, data character encoding methods, symbol formats, dimensional characteristics, error correction rules [...]

As long an image respects these standard, it is a "QR code" and can be understood by most smartphone cameras. The image itself also has a kind of anatomy:

![images/keychron-k2-product_1400x.jpg](images/keychron-k2-product_1400x.jpg)

It is quite interesting, but ultimately these were the three things I cared about:

- We can store up to around 4000 alpha-numeric symbols in a standard sized QR code.
- QR codes can have a "URL" format, which will prompt phones to open it up in a browser when scanned.
- QR codes have error-correction capabilities, which allow it to remain function even if some parts of it is covered or removed—_I did not know this!_

## Architecture

I want to make an app that lets me author some arbitrary content (in this case a short text message), have it persisted somewhere, and generate a QR code that loads the content when I scan it with the phone.

So after breaking these requirements into technical tasks, here is the strategy:

- **Author some arbitrary content**: I'll use a static React front-end to let the user write their message.
- **Persist the content**: I'll have a serverless API (using AWS Lambda and API Gateway) for the front-end to use. It will receive the message (a string) and put it into database for storage. I'll generate a unique ID and use this as the `tag` for the object.
- **Generate a QR Code**: I'll first come up with a URL string I want to encode into the QR image (using the `tag` I made above). Then I'll find a Python library that lets me turn this URL string into a QR image. I'll make the image accessible to the user.
- **Load the content**: Now I'll implement the URL endpoint that the QR code re-directs to. It will probably have the `tag` as a query parameter, so I'll just use that to look up the message in my table and send it back to the page.

### Overall Stack

- **Frontend**: React (Typescript)
- **Backend**: Python code with AWS Lambda and API Gateway
- **Database**: DynamoDB
- **Image Storage**: Amazon S3

## Implementation

Most of the app's 'meaty' logic lives in the [`qr-code-infrastructure/compute/api`](https://github.com/pixegami/qr-code-webapp/tree/main/qr-code-infrastructure/compute/api) folder, as a bunch
of Python functions.

### Generating a `tag` and a URL

When a user sends a message, it generates a random tag using `uuid4` (which I truncated to 12
characters to keep it a bit shorter). A URL to view this message will then be used to create a QR code.

```python

# uuid is a built-in Python library to generate random IDs with, with low chance of collision.
qr_id = uuid.uuid4().hex[:12]
qr_tag = f"qr-{qr_id}"

# We'll later have to implement this page so that it can load our message with the given tag.
content = f"https://qr.pixegami.com/view?tag={qr_tag}"
