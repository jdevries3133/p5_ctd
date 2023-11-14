# P5.js Starter Repo

This starter repo should feel just like Khan Academy! The difference is that the
code is running on your computer, and you just set it up with us _from scratch._
This is a lot more like how real software projects will work.

You should learn that something as simple as getting an app running on your
computer in a way that you can work on it is no simple feat! Software engineers
usually call this, "setting up your development environment." It's no different
than a master woodworker spending many decades refining the setup of their shop.
Don't feel distressed if it's hard to get your development environment perfect.
It will be hard, but if you keep putting in consistent work, your day-to-day
coding will only become easier and more enjoyable!

## Download the Code

[You can click here to download this
code.](https://github.com/jdevries3133/p5_ctd/zipball/master) Or, you can always
download any GitHub repo using the big green, "Code" button.

## Usage without Node

You don't need anything fancy installed on your machine to run P5.js locally.
Just download the code from GitHub, navigate to this folder and double-click on
`index.html`. The snowman should appear on your browser screen.

Once you see the snowman, open `sketch.js` with a text editor. If you are on
Windows, you can use Notepad. On macOS, you can use TextEdit.app. Make a change
to the file (maybe delete the line creating the snowman's head), save the file,
and then hit refresh in the browser window with the snowman. The change you made
should show up!

To get live-reloading when you change the file, read on!

## Usage with Node

If Node is installed on your machine, you can get a live-reloading server, which
will refresh the page every time you change your `sketch.js` file. To do this,
first you need to install supporting software packages with the Node Package
Manager (`npm`). To do this, just run the following in your terminal, ensuring
that you've used `cd` to put your terminal "inside" this project's folder:

```
# you might run "print working" directory in your terminal first to make sure
# you're in the right folder!
pwd

# Then, once you're oriented in the right place, you can install packages with
# Node Package Manager:
npm install
```

After this, you want to invoke the `start` script inside this project's
`package.json` file. `npm` can do this for you with the `run` command. You can
run this in your terminal:

```
npm run start
```

Now, the snowman should pop up in a tab in your browser. If you make changes to
the `sketch.js` file, the page should automatically reload.
