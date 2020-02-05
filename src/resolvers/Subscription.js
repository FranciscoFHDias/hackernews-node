function newLinkSubscribe(root, args, context, info) {
  return context.prisma.$subscribe.link({ mutation_in: ['CREATED'] }).node()
}

function newLinkVote(root, args, context, info) {
  return context.prisma.$subscribe.vote({ mutation_in: ['CREATED'] }).node()
}

const newLink = {
  subscribe: newLinkSubscribe,
  resolve: payload => {
    return payload
  }
}

const newVote = {
  subscribe: newLinkVote,
  resolve: payload => {
    return payload
  }
}

module.exports = { newLink, newVote }