export type PostCardProps = {
  post: Exclude<
    import('../../../../redux/modules/feed/types').FeedPostDataType,
    'created_at' | 'up_vote'
  >
}
