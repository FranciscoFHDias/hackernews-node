function link(root, args, context) {
  return context.prisma.vote({ id: root.id }).link()
}

function user(root, args, context) {
  return context.prisma.vote({ id: root.id }).user()
}

module.exports = { link, user }