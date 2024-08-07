---
title: Undergraduate Research
author: Dana Ernst
layout: default
---

<ol class="breadcrumb">
  <li><a href="/"><i class="fa fa-home"></i></a></li>
  <li><a href="/scholarship">Scholarship</a></li>
  <li class="active">Ugrad Research</li>
</ol>

The combinatorial nature of [my research]({{ site.baseurl }}/scholarship/) naturally lends itself to collaborations with undergraduates, and my goal is to incorporate students in my research as much as possible.

Here is a list of my current and recent undergraduate research projects that are roughly arranged chronologically.

### Contents ###

1. [Sylver Coinage](#SylverCoinage)
2. [Commutation classes of the longest element in the symmetric group](#HeroinHero)
3. [Prime vertex labelings of graphs](#PrimeGraphs)
4. [Factorization of Temperley-Lieb diagrams](#DiagramFactorization)
5. [Mathematics of Spinpossible](#Spinpossible)
6. [Exploration of T-avoiding elements in Coxeter groups of type *F*](#TAvoidingF)
7. [T-avoiding permutations in Coxeter groups of types *A* and *B*](#TAvoidingAB)

### <a name="SylverCoinage"></a>Sylver Coinage ###

The [Sylver Coinage Game](https://en.wikipedia.org/wiki/Sylver_coinage) is a game in which 2 players, *A* and *B*, alternately name positive integers that are not the sum of nonnegative multiples of previously named integers. The person who names 1 is the loser! Here is a sample game between *A* and *B*:

1. *A* opens with 5. Now neither player can name 5, 10, 15,$\ldots$
2. *B* names 4. Now neither player can name 4, 5, 8, 9, 10, or any number greater than 11.
3. *A* names 11. Now the only remaining numbers are 1, 2, 3, 6, and 7.
4. *B* names 6. Now the only remaining numbers are 1, 2, 3, and 7.
5. *A* names 7. Now the only remaining numbers are 1, 2, and 3.
6. *B* names 2. Now the only remaining numbers are 1 and 3.
7. *A* names 3, leaving only 1.
8. *B* is forced to name 1 and loses.

This seemingly innocent looking game is the subject of one of [John Conway's open problems with monetary rewards](http://www.cheswick.com/ches/conway1000.pdf).  In particular, the question that [Conway](https://en.wikipedia.org/wiki/John_Horton_Conway) asks is:

<div class="well">
If player <em>A</em> names 16, and both players play optimally thereafter, then who wins?
</div>

During the 2015-2016 academic year, this question will be the focus of a research project with four undergraduate students: Joni Hazelman, Parker Montfort, Robert Voinescu, and Ryan Wood.  Due to the expected difficulty of the problem (it is a Conway problem after all!), we will begin by focusing our attention on related, and hopefully simpler, questions.  Our research will begin with a survey of what is currently known about the game.  In particular, we would like to know what is known about who wins under optimal play given certain opening moves.  

In addition, we will study a simplified version of the Sylver Coinage game that goes as follows. In the simplified version of the game, a fixed positive integer $n\geq 3$ is agreed upon in advance.  Then 2 players, *A* and *B*, alternately name positive integers from the set $\\{1,2,\ldots,n\\}$ that are not the sum of nonnegative multiples of previously named numbers among $\\{1,2,\ldots,n\\}$. The person who is forced to name 1 is the loser! Here is a sample game between *A* and *B* using the set $\\{1,2,3,4,5,6,7,8,9,10\\}$ (i.e., $n=10$):

1. *A* opens with 4. Now neither player can name 4, 8.
2. *B* names 5. Neither player can name 4, 5, 8, 9, 10.
3. *A* names 6. Neither player can name 4, 5, 6, 8, 9, 10.
4. *B* names 3. Neither player can name 3, 4, 5, 6, 7, 8, 9, 10.
5. *A* names 2. Neither player can name 2, 3, 4, 5, 6, 7, 8, 9, 10.
6. *B* is forced to name 1 and loses.

To my knowledge, no one has explicitly studied this version of the game.  One goal will be to determine who wins under optimal play for given values of $n$.  Moreover, we will attempt to compute the Nim-values for the simplified game. The hope is that by studying the simplified game, we will gain insight into the original Sylver Coinage game.

If you want to know more about other open problems with monetary rewards, check out [this blog post]({{ site.baseurl }}/talk-open-problems-with-monetary-rewards/).

The students have given the following presentations:

- J. Hazelman and P. Montfort. Explorations of Conway’s Sylver Coinage Game. [2016 Nebraska Conference for Undergraduate Women in Mathematics](http://www.math.unl.edu/~ncuwm/18thAnnual/), [University of Nebraska-Lincoln](http://www.unl.edu), Lincoln, NE. January 2016. [[Poster](https://speakerdeck.com/dcernst/explorations-of-conways-sylver-coinage-game)]

### <a name="HeroinHero"></a>Commutation classes of the longest element in the symmetric group ###

Recall that the symmetric group $S_n$ is generated by the adjacent 2-cycles $(1,2),(2,3),\ldots, (n-1,n)$.  That is, every element in $S_n$ can be written as a word using the alphabet consisting of the adjacent 2-cycles.  It is important to note that there are potentially many different ways to express a given permutation as a product of adjacent 2-cycles. If we express a permutation as a product of adjacent 2-cycles in the most efficient way possible, then we call the expression a **reduced expression**.  There may be many different reduced expressions for a given permutation, but all of them can be written in terms of the same number of adjacent 2-cycles occurring in the product (called the **length**).

We say that two reduced expressions are **commutation equivalent** if we can obtain one from the other by only commuting disjoint adjacent 2-cycles (no need to apply any **braid moves**). A **commutation class** of a permutation is the subset of all its reduced expressions that can be obtained from one another by commuting disjoint cycles. For example, there are 11 reduced expressions for $(1,3,5,4)$ that split into 2 commutation classes consisting of 7 and 4 reduced expressions, respectively. The **longest element** in $S_{n}$ is the (unique) element having maximal length.  The number of reduced expressions for the longest element is known.  However, the answer to the following question, originally posed by [Richard Stanley](http://www-math.mit.edu/~rstan/), is unknown:

<div class="well">
How many commutation classes does the longest element in the symmetric group have?
</div>

In $S_{4}$, the longest element is $(1,4)(2,3)$.  In this case, it turns out that there are 8 commutation classes.

During the 2015-2016 academic year, Dustin Story will attack the problem given above. A closed-form solution is probably unlikely.  At the very least, we will generate data aimed at providing insight into the problem.  In addition, one goal will be to identify multiple reformulations of the problem.  Moreover, we will tackle the problem for special classes of elements other than the longest element and possibly explore the analogous problem in other finite Coxeter groups.

If you want to know more, check out the slides linked to in [this blog post]({{ site.baseurl }}/talk-an-open-problem-of-the-symmetric-group/).

### <a name="PrimeGraphs"></a>Prime vertex labelings of graphs ###

For the Fall 2014-Spring 2015 academic year, my colleague [Jeff Rushall](https://nau.edu/CEFNS/NatSci/Math/Directory-Full-Time/Rushall-Jeff/) and I were awarded a [Center for Undergraduate Research in Mathematics](http://curm.byu.edu) (CURM) mini-grant to fund a small group of undergraduate students to work on an original research project in the area of graph theory.  For the project, we recruited a diverse group of 7 talented undergraduates: Nathan Diefenderfer, Michael Hastings (one of my past research students), Levi Heath, Hannah Prawzinsky, Briahna Preston, Emily White, and Alyssa Whittemore. Our research was inspired by two conjectures:

<div class="well">
1. All unicyclic graphs have a prime vertex labeling (Seoud and Youssef, 1999).<br>
2. All tree graphs have a prime vertex labeling (Entringer-Tout Conjecture, 1980).
</div>

A **unicyclic graph** is a simple graph containing exactly one cycle. An $n$-vertex simple graph $G$ with vertex set $V(G)$ is said to have a **prime vertex labeling** if there exists a bijection $f: V(G) \to \\{1, 2, 3, \ldots, n\\}$ such that the labels assigned to adjacent vertices of $G$ are relatively prime.

As discussed in Gallian's ["A Dynamic Survey of Graph Labeling"](http://www.combinatorics.org/Surveys/ds6.pdf), many families of graphs have a prime vertex labeling; the "simpler" types of unicyclic graphs that are known to be "prime" include cycles, helms, crowns, and tadpoles. The goal of this project was to discover additional families of graphs that permit a prime vertex labeling, in hopes of bringing the aforementioned conjectures within reach.

Over the course of the academic year, we uncovered previously unknown prime vertex labelings for several families of graphs including (but not limited to) "hairy" cycles, cycle pendant stars, cycle chains, prisms, and generalized books.  The results of our work is summarized in the following papers:

- N. Diefenderfer, M. Hastings, L.N. Heath, H. Prawzinsky, B. Preston, E. White, A. Whittemore. Prime Vertex Labelings of Several Families of Graphs. *The Rose-Hulman Undergraduate Math Journal* 16(1), 2015. [[arXiv:1506.05826](http://arxiv.org/abs/1506.05826)] [[ePrint](http://www.rose-hulman.edu/mathjournal/archives/2015/vol16-n1/paper14/v16n1-14pd.pdf)]
- N. Diefenderfer, D.C. Ernst, M. Hastings, L.N. Heath, H. Prawzinsky, B. Preston, J. Rushall, E. White, A. Whittemore. Prime Vertex Labelings of Several Families of Graphs. Accepted to *Involve*. [[arXiv:1503.08386](http://arxiv.org/abs/1503.08386)]

In addition, the students have given the following presentations:

- N. Diefenderfer, M. Hastings, L.N. Heath, H. Prawzinsky, B. Preston, E. White, A. Whittemore.  Prime Vertex Labelings of Graphs. Friday Afternoon Mathematics Undergraduate Seminar (FAMUS), [Northern Arizona University](http://nau.edu), Flagstaff, AZ. December 2014. [[Slides](https://speakerdeck.com/dcernst/prime-vertex-labelings-of-graphs)]
- B. Preston and A. Whittemore.  Prime Vertex Labelings of Graphs. [2015 Nebraska Conference for Undergraduate Women in Mathematics](http://www.math.unl.edu/~ncuwm/17thAnnual/), [University of Nebraska-Lincoln](http://www.unl.edu), Lincoln, NE. January 2015. [[Slides](https://speakerdeck.com/dcernst/prime-vertex-labelings-of-graphs-1)]
- H. Prawzinsky and E. White.  On Prime Vertex Labelings. [2015 Nebraska Conference for Undergraduate Women in Mathematics](http://www.math.unl.edu/~ncuwm/17thAnnual/), [University of Nebraska-Lincoln](http://www.unl.edu), Lincoln, NE. January 2015. [[Poster](https://speakerdeck.com/dcernst/prime-vertex-labelings-of-graphs-2)]
- L.N. Heath and E. White. New Results on Prime Vertex Labelings, I. [2015 Southwestern Undergraduate Mathematics Research Conference](http://sunmarc.org) (SUnMaRC), [University of Texas at El Paso](http://www.utep.edu), El Paso, TX. February 2015. [[Slides](https://speakerdeck.com/dcernst/new-results-on-prime-vertex-labelings-i)]
- N. Diefenderfer and B. Preston. New Results on Prime Vertex Labelings, II. [2015 Southwestern Undergraduate Mathematics Research Conference](http://sunmarc.org) (SUnMaRC), [University of Texas at El Paso](http://www.utep.edu), El Paso, TX. February 2015. [[Slides](https://speakerdeck.com/dcernst/new-results-on-prime-vertex-labelings-ii)]
- M. Hastings, H. Prawzinsky, A. Whittemore. New Results on Prime Vertex Labelings, II. [2015 Southwestern Undergraduate Mathematics Research Conference](http://sunmarc.org) (SUnMaRC), [University of Texas at El Paso](http://www.utep.edu), El Paso, TX. February 2015. [[Slides](https://speakerdeck.com/dcernst/new-results-on-prime-vertex-labelings-iii)]
- L.N. Heath and E. White. Unicyclic Graphs with Prime Vertex Labelings, I. 2015 MAA/CURM Spring Conference, [Brigham Young University](http://home.byu.edu/home/), Provo, UT. March 2015. [[Slides](https://speakerdeck.com/dcernst/unicyclic-graphs-with-prime-vertex-labelings-i)]
- N. Diefenderfer and B. Preston. Unicyclic Graphs with Prime Vertex Labelings, II. 2015 MAA/CURM Spring Conference, [Brigham Young University](http://home.byu.edu/home/), Provo, UT. March 2015. [[Slides](https://speakerdeck.com/dcernst/unicyclic-graphs-with-prime-vertex-labelings-ii)]
- M. Hastings and H. Prawzinsky. Nonunicyclic Graphs with Prime Vertex Labelings, I. 2015 MAA/CURM Spring Conference, [Brigham Young University](http://home.byu.edu/home/), Provo, UT. March 2015. [[Slides](https://speakerdeck.com/dcernst/nonunicyclic-graphs-with-prime-vertex-labelings-i)]
- A. Whittemore. Nonunicyclic Graphs with Prime Vertex Labelings, II. 2015 MAA/CURM Spring Conference, [Brigham Young University](http://home.byu.edu/home/), Provo, UT. March 2015. [[Slides](https://speakerdeck.com/dcernst/nonunicyclic-graphs-with-prime-vertex-labelings-ii)]
- N. Diefenderfer, M. Hastings, L.N. Heath, H. Prawzinsky, B. Preston, E. White, A. Whittemore. New Prime Vertex Labelings. [2015 NAU Research Symposium](http://nau.edu/Research/Undergraduate/Undergraduate-Symposium/), [Northern Arizona University](http://nau.edu), Flagstaff, AZ. April 2015. [[Poster](https://speakerdeck.com/dcernst/new-prime-vertex-labelings)]
- H. Prawzinsky. New coprime vertex labelings. [2016 Nebraska Conference for Undergraduate Women in Mathematics](http://www.math.unl.edu/~ncuwm/18thAnnual/), [University of Nebraska-Lincoln](http://www.unl.edu), Lincoln, NE. January 2015. [[Slides](https://speakerdeck.com/dcernst/new-coprime-vertex-labelings)]

For additional information on our CURM grant, see [this blog post]({{ site.baseurl }}/undergraduate-research-project-for-2014-2015/).

### <a name="DiagramFactorization"></a>Factorization of Temperley-Lieb diagrams ###

<!-- <img src="{{ site.baseurl }}/images/2012/02/Screen-Shot-2013-08-07-at-11.21.58-PM.png" width="250" align="left" img style="margin-right: 15px" /> -->
The (type *A*) [Temperley-Lieb diagram algebra](http://en.wikipedia.org/wiki/Temperley-Lieb_algebra), invented by Temperley and Lieb in 1971, is a finite dimensional associative algebra that arose in statistical mechanics.  Penrose and Kauffman showed that this algebra can be realized as a particular diagram algebra, which is a type of associative algebra with a basis given by certain diagrams, where the multiplication rule is given by applying local combinatorial rules to the diagrams.  In 1987, Jones showed that the Temperley-Lieb algebra occurs naturally as a quotient of the type *A* Hecke algebra whose underlying group is the symmetric group.  Eventually, this realization of the Temperley-Lieb algebra as a Hecke algebra quotient was generalized by Graham to the case of an arbitrary Coxeter group.  Subsequently, several diagrammatic representations of these generalized Temperley-Lieb algebras have been constructed for various Coxeter systems.

It turns out that every diagram can be written as a product of a finite set of "simple diagrams."  These factorizations correspond precisely to factorizations in the underlying group.  Given a diagrammatic representation and a factorization of a group element (which may not be unique), it is easy to construct the corresponding diagram.  However, given a diagram, it is generally difficult to reconstruct the factorization of the corresponding group element.  Unlike the situation with natural numbers, knowing the factors is not enough information to obtain the factorization for a given diagram.  The major obstacle is that some factors of the group element may not commute with other factors.

During the Spring 2010 semester, Sarah Otis and Leal Rivanis obtained original results concerning Temperley-Lieb diagram algebras of types *A* and *B*, which have a basis indexed by the fully commutative elements in Coxeter groups of types *A* and *B*, respectively. In particular, we obtained a non-recursive method for enumerating the number of generators occurring in the fully commutative element that indexes a given diagram.  One consequence of our results is a classification of the diagrams of the Temperley-Lieb algebras of types *A* and *B* indexed by [cyclically fully commutative elements](http://arxiv.org/abs/1202.6657).  The students presented their work at the following conference:

- S. Otis and L. Rivanis. Counting generators in type *B* Temperley-Lieb diagrams. [2010 Hudson River Undergraduate Mathematics Conference](https://apps.skidmore.edu/pls/apex/f?p=115:1:2302061374948119), [Keene State College](http://www.keene.edu/), Keene, NH. April 2010. [[Slides](https://speakerdeck.com/dcernst/counting-generators-in-type-b-temperley-lieb-diagrams)]

<!-- <img src="{{ site.baseurl }}/images/2012/02/Factorization-300x108.png" width="250" align="right" img style="margin-left: 15px" /> -->
During the 2013-2014 academic year, I am mentored Michael Hastings and Sarah Salmon on a project aimed at obtaining factorization algorithms for Temperley-Lieb diagrams in various algebras. Michael and Sarah discovered a beautiful and efficient algorithm for factoring diagrams in Temperley–Lieb algebras of types *A* and *B* that yields a "normal form" for the factorization. Their work extends the results obtained by Sarah Otis and Leal Rivanis during the Spring 2010 semester.  The students made the following presentations:

- S. Salmon. Visualizing diagram factorizations in Temperley–Lieb algebras. [Annual Meeting of the Arizona-Nevada Academy of Science](https://www.aznvas.org), [Northern Arizona University](http://nau.edu), Flagstaff, AZ. April 2014. [[Slides](https://speakerdeck.com/dcernst/visualizing-diagram-factorizations-in-temperley-lieb-algebras)]
- M. Hastings and S. Salmon. A factorization of Temperley-Lieb diagrams. [2014 NAU Research Symposium](http://nau.edu/Research/Undergraduate/Undergraduate-Symposium/), [Northern Arizona University](http://nau.edu), Flagstaff, AZ. April 2014. [[Poster](https://speakerdeck.com/dcernst/a-factorization-of-temperley-lieb-diagrams)]
- S. Salmon. Visualizing diagram factorizations in Temperley-Lieb algebras, Part 2. [2014 Southwestern Undergraduate Mathematics Research Conference](http://sunmarc.org) (SUnMaRC), [Mesa Community College](http://www.mesacc.edu), Mesa, AZ. March 2014. [[Slides](https://speakerdeck.com/dcernst/visualizing-diagram-factorizations-in-temperley-lieb-algebras-part-2)]
- M. Hastings. Visualizing diagram factorizations in Temperley-Lieb algebras, Part 1. [2014 Southwestern Undergraduate Mathematics Research Conference](http://sunmarc.org) (SUnMaRC), [Mesa Community College](http://www.mesacc.edu), Mesa, AZ. March 2014. [[Slides](https://speakerdeck.com/dcernst/visualizing-diagram-factorizations-in-temperley-lieb-algebras-part-1)]
- S. Salmon. Towards a factorization of Temperley-Lieb diagrams. [Nebraska Conference for Undergraduate Women in Mathematics](http://www.math.unl.edu/~ncuwm/), [University of Nebraska-Lincoln](http://www.unl.edu), Lincoln, NE. February 2014. [[Slides](https://speakerdeck.com/dcernst/towards-a-factorization-of-temperley-lieb-diagrams)]
- M. Hastings and S. Salmon.  A factorization of Temperley-Lieb diagrams.  Undergraduate Student Poster Session, [2014 Joint Mathematics Meetings](http://jointmathematicsmeetings.org/jmm), Baltimore, MD. January 2014. [[Poster](https://speakerdeck.com/dcernst/a-factorization-of-temperley-lieb-diagrams)]
- M. Hastings and S. Salmon.  A factorization of Temperley-Lieb diagrams. Friday Afternoon Mathematics Undergraduate Seminar (FAMUS), [Northern Arizona University](http://nau.edu), Flagstaff, AZ. November 2013. [[Slides](https://speakerdeck.com/dcernst/a-factorization-of-temperley-lieb-diagrams-1)]

### <a name="Spinpossible"></a>Mathematics of Spinpossible ###

<!-- <img src="{{ site.baseurl }}/images/2012/02/Scramble1.png" width="200" align="left" img style="margin-right: 15px" /> -->
Two of my students, Dane Jacobson and Michael Woodward, spent the Spring 2013 semester studying the mathematics behind [Spinpossible](https://spinpossible.com), which is a game that is available for iOS and Android devices.  Alternatively, you can just play the game in any modern web browser.  The game is played on a 3 by 3 board of scrambled tiles numbered 1 to 9, each of which may be right-side-up or up-side-down. The objective of the game is to return the board to the standard configuration where tiles are arranged in numerical order and right-side-up.  This is accomplished by a sequence of "spins", each of which rotates a rectangular region of the board by 180 degrees. The goal is to minimize the number of spins used.  It turns out that the group generated by the set of allowable spins is identical to the [symmetry group of the 9 dimensional hyper-cube](http://en.wikipedia.org/wiki/Hyperoctahedral_group) (equivalently, a [Coxeter group](http://en.wikipedia.org/wiki/Coxeter_group) of type $B_9$).

In a 2011 paper, Alex Sutherland and [Andrew Sutherland](http://math.mit.edu/~drew/) (a father and son team) present a number of interesting results about Spinpossible and list a few open problems.  You can find the paper [here](http://arxiv.org/abs/1110.6645).  As a side note, Alex is one of the developers of the game and his father, Andrew, is a mathematics professor at [MIT](http://www.mit.edu).  Using brute-force, the Sutherlands verified that every scrambled board can be solved in at most 9 moves.  The goal of the project was to find a short proof of this fact, but this remains elusive.  Dane continued to work on this unexpectedly difficult problem during the Fall 2013 semester and obtained a proof that every $2\times 2$ board can be solved in 5 moves or less. The students made the following presentations of their research:

- D. Jacobson. Mathematics of the game Spinpossible. [2014 NAU Research Symposium](http://nau.edu/Research/Undergraduate/Undergraduate-Symposium/), [Northern Arizona University](http://nau.edu), Flagstaff, AZ. April 2014. [[Poster](https://speakerdeck.com/dcernst/mathematics-of-the-game-spinpossible-2)]
- D. Jacobson. Mathematics of the game Spinpossible (3 hour-long talks). Algebra, Combinatoric, Geometry, and Topology (ACGT) Seminar, [Northern Arizona University](http://nau.edu), Flagstaff, AZ. November 2013.
- D. Jacobson and M. Woodward. Mathematics of the game Spinpossible. [2013 NAU Research Symposium](http://nau.edu/Research/Undergraduate/Undergraduate-Symposium/), [Northern Arizona University](http://nau.edu), Flagstaff, AZ. April 2013. [[Poster](https://speakerdeck.com/dcernst/mathematics-of-the-game-spinpossible-2)]
- D. Jacobson and M. Woodward. Mathematics of the game Spinpossible. Friday Afternoon Mathematics Undergraduate Seminar (FAMUS), [Northern Arizona University](http://nau.edu), Flagstaff, AZ. March 2013. [[Slides](https://speakerdeck.com/dcernst/mathematics-of-the-game-spinpossible-1)]
- D. Jacobson and M. Woodward. Mathematics of the game Spinpossible. [2013 Southwestern Undergraduate Mathematics Research Conference](http://sunmarc.org) (SUnMaRC), [University of New Mexico](http://www.unm.edu/), Albuquerque, NM. March 2013. [[Slides](https://speakerdeck.com/dcernst/mathematics-of-the-game-spinpossible)] [[Blog Post]({{ site.baseurl }}/sunmarc-2013/)]


### <a name="TAvoidingF"></a>Exploration of T-avoiding elements in Coxeter groups of type *F* ###

<!-- <img src="{{ site.baseurl }}/images/2012/02/Screen-Shot-2013-08-07-at-11.22.59-PM.png" width="200" align="right" img style="margin-left: 15px" /> -->
In mathematics, one uses [groups](http://en.wikipedia.org/wiki/Group_(mathematics)) to study [symmetry](http://en.wikipedia.org/wiki/Symmetry).  In particular, a [reflection group](http://en.wikipedia.org/wiki/Reflection_group) is used to study the reflection and rotational symmetry of an object.  A [Coxeter group](http://en.wikipedia.org/wiki/Coxeter_group) can be thought of as a generalized reflection group, where the group is generated by a set of elements of order two (i.e., reflections) and there are rules for how the generators interact with each other.  Every element of a Coxeter group can be written as an expression in the generators, and if the number of generators in an expression is minimal, we say that the expression is reduced.  An element $w$ of a Coxeter group is called T-avoiding if $w$ does not have a reduced expression beginning or ending with a pair of non-commuting generators.

During the 2011-2012 academic year, I mentored Ryan Cross, Katie Hills-Kimball, and Christie Quaranta at [Plymouth State University](http://plymouth.edu) on an original research project aimed at exploring the T-avoiding elements in Coxeter groups of type *F*.  In particular, the students successfully classified the T-avoiding elements in the infinite Coxeter group of type $F_{5}$, as well as the finite Coxeter group of type $F_{4}$. We conjectured that our classification holds more generally for arbitrary $F_{n}$.  However, a year later, Selina Gilbertson showed that this is not the case (see below).  The students made the following presentations:

- R. Cross, K. Hills-Kimball, and C. Quaranta. Classification of the T-avoiding elements in Coxeter groups of type *F*. [2012 Hudson River Undergraduate Mathematics Conference](https://apps.skidmore.edu/pls/apex/f?p=115:8:4058920624008023::NO:::), [Western New England University](http://www.wne.edu), Springfield, MA. April 2012. [[Slides](https://speakerdeck.com/dcernst/classification-of-the-t-avoiding-elements-in-coxeter-groups-of-type-f)]
- R. Cross, K. Hills-Kimball, and C. Quaranta. Classification of the T-avoiding elements in Coxeter groups of type *F*. [PSU Research Symposium](http://thisweek.blogs.plymouth.edu/2012/04/20/9178/), [Plymouth State University](http://plymouth.edu), Plymouth, NH. April 2012. [[Poster](https://speakerdeck.com/dcernst/classification-of-the-t-avoiding-elements-in-coxeter-groups-of-type-f-1)]

In the Spring of 2013, I worked with Selina Gilbertson at [Northern Arizona University](http://nau.edu) on extending the results obtained by Ryan, Katie, and Christie the previous year.  The initial goal was to prove that there were no new T-avoiding elements (other than tacking on products of commuting generators) in type $F_n$ for $n\geq 6$.  Selina discovered that this is horribly wrong.  It appears that the classification of T-avoiding elements in higher ranks gets more and more complicated.  We believe that we have the correct classification of the T-avoiding elements in type $F_6$ and Selina was able to put most of the pieces of a proof together in one semester.  This is a hard problem!  Selina gave the following presentations:

- S. Gilbertson. Investigation of T-avoiding elements of Coxeter groups. [2013 NAU Research Symposium](http://nau.edu/Research/Undergraduate/Undergraduate-Symposium/), [Northern Arizona University](http://nau.edu), Flagstaff, AZ. April 2013. [[Poster](https://speakerdeck.com/dcernst/investigation-of-t-avoiding-elements-of-coxeter-groups-1)]
- S. Gilbertson. Investigation of T-avoiding elements of Coxeter groups. [2013 Southwestern Undergraduate Mathematics Research Conference](http://sunmarc.org) (SUnMaRC), [University of New Mexico](http://www.unm.edu/), Albuquerque, NM. March 2013. [[Slides](https://speakerdeck.com/dcernst/investigation-of-t-avoiding-elements-of-coxeter-groups)] [[Blog Post]({{ site.baseurl }}/sunmarc-2013/)]

### <a name="TAvoidingAB"></a>T-avoiding permutations in Coxeter groups of types *A* and *B* ###

<!-- <img src="{{ site.baseurl }}/images/2013/01/pic4.png" width="250" align="left" img style="margin-right: 15px" /> -->
A permutation of a set of objects is simply a rearrangement of those objects.  If we have $n$ objects, then a permutation can be represented as a function from $\\{1, 2,\ldots , n\\}$ to $\\{1, 2, \ldots , n\\}$.  We say that a permutation $w$ has property T if there exists $i$ such that either $w(i)$ is greater than $w(i+1)$ and $w(i+2)$, or $w(i+2)$ is less than $w(i)$ and $w(i+1)$.  A permutation $w$ is T-avoiding if neither $w$ nor its inverse have property T.

During the 2010-2011 academic year, I mentored Joseph Cormier, Zachariah Goldenberg, Jessica Kelly, and Christopher Malbon on an original research project aimed at exploring the T-avoiding permutations.  As a result of our research, we classified the T-avoiding permutations in the symmetric group, which happens to be a [Coxeter group](http://en.wikipedia.org/wiki/Coxeter_group) of type *A*.  In addition, we generalized the notion of T-avoiding to arbitrary Coxeter groups and classified the T-avoiding elements in Coxeter groups of type *B* (i.e., the group of signed permutations).  Our results are a reformulation of known results, but with a much simpler proof. We are currently in the progress of writing up our results with the intention of submitting an article for publication.  The students also made the following presentations:

- J. Cormier, Z. Goldenberg, and J. Kelly.  Classification of the T-avoiding permutations and generalizations to other Coxeter groups. [PSU Research Symposium](http://thisweek.blogs.plymouth.edu/2012/04/20/9178/), [Plymouth State University](http://plymouth.edu), Plymouth, NH. April 2012. [[Poster](https://speakerdeck.com/dcernst/classification-of-the-t-avoiding-permutations-and-generalizations-to-other-coxeter-groups)]
- J. Cormier, Z. Goldenberg, and J. Kelly.  Classification of the T-avoiding permutations and generalizations to other Coxeter groups. Undergraduate Student Poster Session, [2012 Joint Mathematics Meetings](http://jointmathematicsmeetings.org/jmm), Boston, MA. January 2012. [[Poster](https://speakerdeck.com/dcernst/classification-of-the-t-avoiding-permutations-and-generalizations-to-other-coxeter-groups-1)]
- J. Cormier, Z. Goldenberg, J. Kelly, and C. Malbon.  Classification of the T-avoiding permutations and generalizations to other Coxeter groups. [Combinatorics of Coxeter Groups Special Session](http://danaernst.com/archive/SpecialSession/specialsession.html), [Spring 2011 Eastern Sectional Meeting of the AMS](http://www.ams.org./meetings/sectional/2177_program.html), [College of the Holy Cross](http://www.holycross.edu/), Worcester, MA. April 2011. [[Slides](https://speakerdeck.com/dcernst/classification-of-the-t-avoiding-permutations-and-generalizations-to-other-coxeter-groups-2)]
- J. Cormier, Z. Goldenberg, J. Kelly, and C. Malbon.  Classification of the T-avoiding permutations. [2011 Hudson River Undergraduate Mathematics Conference](https://apps.skidmore.edu/pls/apex/f?p=115:8:4058920624008023::NO:::), [Skidmore College](http://skidmore.edu), Saratoga Springs, NY. April 2011. [[Slides](https://speakerdeck.com/dcernst/classification-of-the-t-avoiding-permutations-and-generalizations-to-other-coxeter-groups-3)]
