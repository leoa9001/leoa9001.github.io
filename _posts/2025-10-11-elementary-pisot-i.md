---
layout: post
title: Yet another thing about the golden ratio Part I
date: 2025-10-11
description: 
tags: math elementary-math 
categories: 
related_posts: false
published: true
---

Awhile back I saw a list of "almost integers" - numbers which *coincidentally* are almost integral. It started by noting that the powers of the golden ratio, $\varphi = \frac{1 + \sqrt{5}}{2}$, get closer and closer to being integral: 

$$
\begin{align*}
\varphi^{1} &\approx 1.6180339887499\\
\varphi^{2} &\approx 2.6180339887499\\
\varphi^{3} &\approx 4.2360679774998\\
\varphi^{5} &\approx 11.090169943749\\
\varphi^{8} &\approx 46.978713763748\\
\varphi^{13} &\approx 521.00191937873\\
\varphi^{21} &\approx 24476.000040856\\
\varphi^{22} &\approx 39602.999974749
\end{align*}
$$

You might also notice that the odd powers are a little above an integer and the even powers are a little below an integer. Now, knowing a little algebraic number theory you can immediately see why this is. Let $\bar{\varphi} = \frac{1 - \sqrt{5}}{2} = -\frac{1}{\varphi} \approx -0.61803$, then one has
\begin{equation}
\varphi^n + {\bar{\varphi}}^n \in \mathbb{Z}
\end{equation}
is always an integer. Given this fact, one notices that the term $\bar{\varphi}^n$ approaches $0$ exponentially and alternates between being negative and positive. Thus we have that
\begin{equation}
\varphi^n = l_n - \left(-\frac{1}{\varphi}\right)^n, l_n\in \mathbb{Z}
\end{equation}

**Lemma** Given a monic, irreducible, integer polynomial, $f(x) = x^n + a_{n-1}x^{n-1}+\cdots + a_0, a_i\in \mathbb{Z}$ the sum of $k$th powers of its roots is always an integer. 

Roots of polynomials of this form are called *algebraic integers*. Examples include, $\varphi, \sqrt{2}, \mathbb{Z}, r = \sqrt[3]{19}, i, \frac{1 + r + r^2}{3}$, but not numbers like $\frac{1}{2}, \pi, e, \frac{1 + r + r^2}{6}$. Every algebraic integer has a unique *minimal polynomial*, the lowest degree monic polynomial which has it as a root. For $\sqrt[n]{d}$, its $x^n - d$, for $\varphi$, $x^2 - x -1$, and for $\frac{1+r+r^2}{3}$, its $x^3- x^2-6x-12$. The other roots of an algebraic integer's minimal polynomial are called *conjugates*. $\sqrt{2}$'s unique conjugate is $-\sqrt{2}$, and $\varphi$'s unique conjugate is $-1/\varphi$. One might notice

$$
\varphi = \frac{1+\sqrt{5}}{2}, \bar{\varphi} = \frac{1-\sqrt{5}}{2}
$$

If this reminds you of complex conjugation, you are on the right track. In fact, $a+ib, a,b\in \mathbb{Z}$ are algebraic integers and their conjugates are $a - ib$ respectively. Similar to complex conjugation, "conjugation"[^1] respects addition and multiplication: $\overline{a+b} = \bar{a}+\bar{b}, \overline{ab} = \bar{a}\bar{b}$. And, just as $z+\bar{z} \in \mathbb{R}$, the sum of all conjugates of an algebraic integer is integral. 

This last fact is what proves the above lemma and immediately see that $\varphi^n$ gets closer and closer to being integral. We know now that $\varphi^n + \bar{\varphi}^n$ is integral, and since $\|\bar{\varphi}\|<1$ it contributes exponentially little to the sum over time. 
However, if you compute the numbers $l_n = \varphi^n + \bar{\varphi}^n$, you may see a familiar pattern:

$$
l_n: 2, 1, 3, 4, 7, 11, 18, 29, 47,\ldots
$$

You see that the sums of powers follow a very simple, and familiar, recurrence relation: $l_n = l_{n-1} + l_{n-2}$. This suggests that there may be another proof that $\varphi^n$ becomes more integral over time that doesn't use any algebraic number theory at all. If one proves that this recurrence relation holds, and that the solution to the recurrence is $l_n = \varphi^n + \bar{\varphi}^n$, then computing $l_0 = 2, l_1 = 1$ proves that every subsequent $l_n$ is integral. In Part II, I'll prove this fact in an "elementary" way. It won't use any knowledge past single variable calculus (though having seen a generating function before would help). 

[^1]: For the technical, action by an element of $\text{Gal}(\bar{\mathbb{Q}}/\mathbb{Q})$ on an algebraic integer in $\bar{\mathbb{Q}}$. 