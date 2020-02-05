function feed(root, args, context, ifo) {
  return context.prisma.links()
}

module.exports = { feed }