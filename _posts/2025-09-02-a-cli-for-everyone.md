---
layout: post
title:  a cli for everyone
date:   2025-09-02 21:22:00 +0100
categories:
  - rust
  - cli
  - learn
---

## bbshark

[bbshark](https://crates.io/crates/bbshark) is now available on [crates.io](https://crates.io) and has had over 660 downloads to date.

bbshark is a blazingly fast CLI tool written in rust that prints a very popular kid's song.

## Motivation

I have come to love command line interface (CLI) tools.
They are powerful and fast (my favourite at the moment is [bat](https://github.com/sharkdp/bat) by the way).

They are useful because I have tasks and jobs to do.

But, if you are a kid, you probably haven't built up such a to do list.

So, it begs the question, how do we introduce younglings to CLI tools?

Through play.

bbshark is a playful CLI. The user can configure it with command line arguments to modify the printed output for fun.

## Usage

Running bbshark with no arguments prints popular lyrics to the screen:

```bash
$ bbshark
Baby shark... doo, doo, doo, doo, doo, doo.
Baby shark!
```

### Options

The printed output can be modified using flags that change the animal (`-a`) from 'shark' to 'dolphin' and/or the relative (`-r`) from 'Baby' to 'Sister':

```bash
$ bbshark -a dolphin -r Sister
Sister dolphin... doo, doo, doo, doo, doo, doo.
Sister dolphin!
```

To view a full list of options, use the help flag (`-h` or `--help`):

```bash
$ bbshark -h
bbshark 1.0.0
https://github.com/dunlopWill
Rust baby shark

USAGE:
    bbshark [OPTIONS]

FLAGS:
    -h, --help       Prints help information
    -V, --version    Prints version information

OPTIONS:
    -a, --animal <ANIMAL>        The animal (e.g. 'shark'). [default: shark]
    -d, --doos <DOOS>            Number of 'doo's (between 1 and 127) [default: 6]
    -r, --relative <RELATIVE>    The relative (e.g. 'Baby'). [default: Baby]
    -s, --sep <SEP>              The separator to use between words (e.g. ','). [default: ,]
    -w, --word <WORD>            The word to repeat (e.g. 'doo'). [default: doo]
```

## Bonus

Consider piping the output from stdout into [cowsay](https://cowsay.diamonds/) and/or [lolcat](https://github.com/busyloop/lolcat) for even more fun:

```bash
$ bbshark -r Grandma -a llama -d 42 -w baa | cowsay -f llama | lolcat
 _________________________________________
/ Grandma llama... baa, baa, baa, baa,    \
| baa, baa, baa, baa, baa, baa, baa, baa, |
| baa, baa, baa, baa, baa, baa, baa, baa, |
| baa, baa, baa, baa, baa, baa, baa, baa, |
| baa, baa, baa, baa, baa, baa, baa, baa, |
| baa, baa, baa, baa, baa, baa. Grandma   |
\ llama!                                  /
 -----------------------------------------
  \
   \
       (\/)
      (_o |
       /  |
       \  \______
        \        )o
         /|----- |
         \|     /|
```
