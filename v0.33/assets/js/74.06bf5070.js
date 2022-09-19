(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{637:function(e,t,o){"use strict";o.r(t);var n=o(0),i=Object(n.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"interview-transcript-with-tendermint-core-researcher-zarko-milosevic-by-chjango"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#interview-transcript-with-tendermint-core-researcher-zarko-milosevic-by-chjango"}},[e._v("#")]),e._v(" Interview Transcript with Tendermint core researcher, Zarko Milosevic, by Chjango")]),e._v(" "),o("p",[o("strong",[e._v("ZM")]),e._v(": Regarding leader election, it's round robin, but a weighted one. You\ntake into account the amount of bonded tokens. Depending on how much weight\nthey have of voting power, they would be elected more frequently. So we do\nrotate, but just the guys who are having more voting power would be elected\nmore frequently. We are having 4 validators, and 1 of them have 2 times more\nvoting power, they have 2 times more elected as a leader.")]),e._v(" "),o("p",[o("strong",[e._v("CC")]),e._v(": 2x more absolute voting power or probabilistic voting power?")]),e._v(" "),o("p",[o("strong",[e._v("ZM")]),e._v(": It's actually very deterministic. It's not probabilistic at all. See\n"),o("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/v0.33.x/spec/reactors/consensus/proposer-selection.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tendermint proposal election specification"),o("OutboundLink")],1),e._v(". In Tendermint, there is no\npseudorandom leader election. It's a deterministic protocol. So leader election\nis a built-in function in the code, so you know exactly—depending on the voting\npower in the validator set, you'd know who exactly would be the leader in round\nx, x + 1, and so on. There is nothing random there; we are not trying to hide\nwho would be the leader. It's really well known. It's just that there is a\nfunction, it's a mathematical function, and it's just basically—it's kind of an\nimplementation detail—it starts from the voting power, and when you are\nelected, you get decreased some number, and in each round you keep increasing\ndepending on your voting power, so that you are elected after k rounds again.\nBut knowing the validator set and the voting power, it's very simple function,\nyou can calculate yourself to know exactly who would be next. For each round,\nthis function will return you the leader for that round. In every round, we do\nthis computation. It's all part of the same flow. It enforces the properties\nwhich are: proportional to your voting power, you will be elected, and we keep\nchanging the leaders. So it can't happen to have one guy being more elected\nthan other guys, if they have the same voting power. So one time it will be guy\nB, and next time it will be guy B1. So it's not random.")]),e._v(" "),o("p",[o("strong",[e._v("CC")]),e._v(": Assuming the validator set remains unchanged for a month, then if you\nrun this function, are you able to know exactly who is going to go for that\nentire month?")]),e._v(" "),o("p",[o("strong",[e._v("ZM")]),e._v(": Yes.")]),e._v(" "),o("p",[o("strong",[e._v("CC")]),e._v(": What're the attack scenarios for this?")]),e._v(" "),o("p",[o("strong",[e._v("ZM")]),e._v(": This is something which is easily attacked by people who argue that\nTendermint is not decentralized enough. They say that by knowing the leader,\nyou can DDoS the leader. And by DDoSing the leader, you are able to stop the\nprogress. Because it's true. If you would be able to DDoS the leader, the\nleader would not be able to propose and then effectively will not be making\nprogress. How we are addressing this thing is Sentry Architecture. So the\nvalidator—or at least a proper validator—will never be available. You don't\nknow the ip address of the validator. You are never able to open the connection\nto the validator. So validator is spawning sentry nodes and this is the single\nadministration domain and there is only connection from validator in the sense\nof sentry nodes. And ip address of validator is not shared in the p2p network.\nIt’s completely private. This is our answer to DDoS attack. By playing clever\nat this sentry node architecture and spawning additional sentry nodes in case,\nfor ex your sentry nodes are being DDoS’d, bc your sentry nodes are public,\nthen you will be able to connect to sentry nodes. this is where we will expect\nthe validator to be clever enough that so that in case they are DDoS’d at the\nsentry level, they will spawn a different sentry node and then you communicate\nthrough them. We are in a sense pushing the responsibility on the validator.")]),e._v(" "),o("p",[o("strong",[e._v("CC")]),e._v(": So if I understand this correctly, the public identity of the validator\ndoesn’t even matter because that entity can obfuscate where their real full\nnodes reside via a proxy through this sentry architecture.")]),e._v(" "),o("p",[o("strong",[e._v("ZM")]),e._v(": Exactly. So you do know what is the address or identity of the validator\nbut you don’t know the network address of it; you’re not able to attack it\nbecause you don’t know where they are. They are completely obfuscated by the\nsentry nodes. There is now, if you really want to figure out….There is the\nTendermint protocol, the structure of the protocol is not fully decentralized\nin the sense that the flow of information is going from the round proposer, or\nthe round coordinator, to other nodes, and then after they receive this it’s\nbasically like [inaudible: “O to 1”]. So by tracking where this information is\ncoming from, you might be able to identify who are the sentry nodes behind it.\nSo if you are doing some network analysis, you might be able to deduce\nsomething. If the thing would be completely stuck, where the validator would\nnever change their sentry nodes or ip addresses of sentry nodes, it could be\npossible to deduce something. This is where economic game comes into play. We\nare doing an economics game there. We say that it’s a validator business. If\nthey are not able to hide themselves well enough, they’ll be DDoS’d and they\nwill be kicked out of the active validator set. So it’s in their interest.")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/v0.33.x/spec/reactors/consensus/proposer-selection.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("Proposer Selection Procedure in Tendermint"),o("OutboundLink")],1),e._v(". This is how it should work no\nmatter what implementation.")]),e._v(" "),o("p",[o("strong",[e._v("CC")]),e._v(": Going back to the proposer, lets say the validator does get DDoS’d, then\nthe proposer goes down. What happens?")]),e._v(" "),o("p",[o("strong",[e._v("ZM")]),e._v(": How the proposal mechanism works—there’s nothing special there—it goes\nthrough a sequence of rounds. Normal execution of Tendermint is that for each\nheight, we are going through a sequence of rounds, starting from round 0, and\nthen we are incrementing through the rounds. The nodes are moving through the\nrounds as part of normal procedure until they decide to commit. In case you\nhave one proposer—the proposer of a single round—being DDoS’d, we will probably\nnot decide in that round, because he will not be able to send his proposal. So\nwe will go to the next round, and hopefully the next proposer will be able to\ncommunicate with the validators and then we’ll decide in the next round.")]),e._v(" "),o("p",[o("strong",[e._v("CC")]),e._v(": Are there timeouts between one round to another, if a round gets\nskipped?")]),e._v(" "),o("p",[o("strong",[e._v("ZM")]),e._v(": There are timeouts. It’s a bit more complex. I think we have 5 timeouts.\nWe may be able to simplify this a bit. What is important to understand is: The\nonly condition which needs to be satisfied so we can go to the next round is\nthat your validator is able to communicate with more than 2/3rds of voting\npower. To be able to move to the next round, you need to receive more than\n2/3rd of voting power equivalent of pre-commit messages.")]),e._v(" "),o("p",[e._v("We have two kinds of messages: 1) Proposal: Where the current round proposer is\nsuggesting how the next block should look like. This is first one. Every round\nstarts with proposer sending a proposal. And then there are two more rounds of\nvoting, where the validator is trying to agree whether they will commit the\nproposal or not. And the first of such vote messages is called "),o("code",[e._v("pre-vote")]),e._v(" and\nthe second one is "),o("code",[e._v("pre-commit")]),e._v(". Now, to be able to move between steps, between\na "),o("code",[e._v("pre-vote")]),e._v(" and "),o("code",[e._v("pre-commit")]),e._v(" step, you need to receive enough number of\nmessages where if message is sent by validator A, then also this message has a\nweight, or voting power which is equal to the voting power of the validator who\nsent this message. Before you receive more than 2/3 of voting power messages, you are not\nable to move to the higher round. Only when you receive more than 2/3 of\nmessages, you actually start the timeout. The timeout is happening only after\nyou receive enough messages. And it happens because of the asynchrony of the\nmessage communication so you give more time to guys with this timeout to\nreceive some messages which are maybe delayed.")]),e._v(" "),o("p",[o("strong",[e._v("CC")]),e._v(": In this way that you just described via the whole network gossiping\nbefore we commit a block, that is what makes Tendermint BFT deterministic in a\npartially synchronous setting vs Bitcoin which has synchrony assumptions\nwhereby blocks are first mined and then gossiped to the network.")]),e._v(" "),o("p",[o("strong",[e._v("ZM")]),e._v(": It's true that in Bitcoin, this is where the synchrony assumption comes\nto play because if they're not able to communicate timely, they are not able to\nconverge to a single longest chain. Why are they not able to decrease timeout\nin Bitcoin? Because if they would decrease, there would be so many forks that\nthey won't be able to converge to a single chain. By increasing this\ncomplexity and the block time, they're able to have not so many forks. This is\neffectively the timing assumption—the block duration in a sense because it's\nenough time so that the decided block is propagated through the network before\nsomeone else start deciding on the same block and creating forks. It's very\ndifferent from the consensus algorithms in a distributed computing setup where\nTendermint fits. In Tendermint, where we talk about the timing dependency, they\nare really part of this 3-communication step protocol I just explained. We have\nthe following assumption: If the good guys are not able to communicate timely\nand reliably without having message loss within a round, the Tendermint will\nnot make progress—it will not be making blocks. So if you are in a completely\nasynchronous network where messages get lost or delayed unpredictably,\nTendermint will not make progress, it will not create forks, but it will not\ndecide, it will not tell you what is the next block. For termination, it's a\nliveness property of consensus. It's a guarantee to decide. We do need timing\nassumptions. Within a round, correct validators are able to communicate to each\nother the consensus messages, not the transactions, but consensus messages.\nThey need to communicate in a timely and reliable fashion. But this doesn't\nneed to hold forever. It's just that what we are assuming when we say it's a\npartially synchronous system, we assume that the system will be going through a\nperiod of asynchrony, where we don't have this guarantee; the messages will be\ndelayed or some will be lost and then will not make progress for some period of\ntime, or we're not guaranteed to make progress. And the period of synchrony\nwhere these guarantees hold. And if we think about internet, internet is best\ndescribed using such a model. Sometimes when we send a message to SF to\nBelgrade, it takes 100 ms, sometimes it takes 300 ms, sometimes it takes 1 s.\nBut in most cases, it takes 100 ms or less than this.")]),e._v(" "),o("p",[e._v("There is one thing which would be really nice if you understand it. In a global\nwide area network, we can't make assumption on the communication unless we are\nvery conservative about this. If you want to be very fast, then we can't make\nassumption and say we'll be for sure communicating with 1 ms communication\ndelay. Because of the complexity and various congestion issues on the network,\nit might happen that during a short period of time, this doesn't hold. If this\ndoesn't hold and you depend on this for correctness of your protocol, you will\nhave a fork. So the partially synchronous protocol, most of them like\nTendermint, they don't depend on the timing assumption from the internet for\ncorrectness. This is where we state: safety always. So we never make a fork no\nmatter how bad our estimates about the internet communication delays are. We'll\nnever make a fork, but we do make some assumptions, and these assumptions are\nbuilt-in our timeouts in our protocol which are actually adaptive. So we are\nadapting to the current condition and this is where we're saying...We do assume\nsome properties, or some communication delays, to eventually hold on the\nnetwork. During this period, we guarantee that we will be deciding and\ncommitting blocks. And we will be doing this very fast. We will be basically on\nthe speed of the current network.")]),e._v(" "),o("p",[o("strong",[e._v("CC")]),e._v(": We make liveness assumptions based on the integrity of the validator\nbusinesses, assuming they're up and running fine.")]),e._v(" "),o("p",[o("strong",[e._v("ZM")]),e._v(": This is where we are saying, the protocol will be live if we have at\nmost 1/3, or a bit less than 1/3, of faulty validators. Which means that all\nother guys should be online and available. This is also for liveness. This is\nrelated to the condition that we are not able to make progress in rounds if we\ndon't receive enough messages. If half of our voting power, or half of our\nvalidators are down, we don't have enough messages, so the protocol is\ncompletely blocked. It doesn't make progress in a round, which means it's not\nable to be signed. So it's completely critical for Tendermint that we make\nprogress in rounds. It's like breathing. Tendermint is breathing. If there is\nno progress, it's dead; it's blocked, we're not able to breathe, that's why\nwe're not able to make progress.")]),e._v(" "),o("p",[o("strong",[e._v("CC")]),e._v(": How does Tendermint compare to other consensus algos?")]),e._v(" "),o("p",[o("strong",[e._v("ZM")]),e._v(": Tendermint is a very interesting protocol. From an academic point of\nview, I'm convinced that there is value there. Hopefully, we prove it by\npublishing it on some good conference. What is novel is, if we compare first\nTendermint to this existing BFT problem, it's a continuation of academic\nresearch on BFT consensus. What is novel in Tendermint is that it somehow\nmerges consensus protocol with gossip. This is completely novel idea.\nOriginally, in BFT, people were assuming the single administration domain,\nsmall number of nodes, local area network, 4-7 nodes max. If you look at the\nresearch paper, 99% of them have this kind of setup. Wide area was studied but\nthere is significantly less work in wide area networks. No one studied how to\nscale those protocols to hundreds or thousands of nodes before blockchain. It\nwas always a single administration domain. So in Tendermint now, you are able\nto reach consensus among different administration domains which are potentially\nhundreds of them in wide area network. The system model is potentially harder\nbecause we have more nodes and wide area network. The second thing is that:\nnormally, in bft protocols, the protocol itself are normally designed in a way\nthat has two phases, or two parts. The one which is called normal case, which\nis normally quite simple, in this normal case. In spite of some failures, which\nare part of the normal execution of the protocol, like for example leader\ncrashes or leader being DDoS'd, they need to go through a quite complex\nprotocol, which is like being called view change or leader election or\nwhatever. These two parts of the same protocol are having quite different\ncomplexity. And most of the people only understand this normal case. In\nTendermint, there is no this difference. We have only one protocol, there are\nnot two protocols. It's always the same steps and they are much closer to the\nnormal case than this complex view change protocol.")]),e._v(" "),o("p",[o("em",[e._v("This is a bit too technical but this is on a high level things to remember,\nthat: The system it addresses it's harder than the others and the algorithm\ncomplexity in Tendermint is simpler.")]),e._v(" The initial goal of Jae and Bucky which\nis inspired by Raft, is that it's simpler so normal engineers could understand.")]),e._v(" "),o("p",[o("strong",[e._v("CC")]),e._v(": Can you expand on the termination requirement?")]),e._v(" "),o("p",[o("em",[e._v("Important point about Liveness in Tendermint")])]),e._v(" "),o("p",[o("strong",[e._v("ZM")]),e._v(": In Tendermint, we are saying, for termination, we are making assumption\nthat the system is partially synchronous. And in a partially synchronous system\nmodel, we are able to mathematically prove that the protocol will make\ndecisions; it will decide.")]),e._v(" "),o("p",[o("strong",[e._v("CC")]),e._v(": What is a persistent peer?")]),e._v(" "),o("p",[o("strong",[e._v("ZM")]),e._v(": It's a list of peer identities, which you will try to establish\nconnection to them, in case connection is broken, Tendermint will automatically\ntry to reestablish connection. These are important peers, you will really try\npersistently to establish connection to them. For other peers, you just drop it\nand try from your address book to connect to someone else. The address book is a\nlist of peers which you discover that they exist, because we are talking about a\nvery dynamic network—so the nodes are coming and going away—and the gossiping\nprotocol is discovering new nodes and gossiping them around. So every node will\nkeep the list of new nodes it discovers, and when you need to establish\nconnection to a peer, you'll look to address book and get some addresses from\nthere. There's categorization/ranking of nodes there.")])])}),[],!1,null,null,null);t.default=i.exports}}]);