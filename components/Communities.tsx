import { useQuery } from '@apollo/client'
import { Jelly } from '@uiball/loaders'
import React from 'react'
import { GET_SUBREDDIT_WITH_LIMIT } from '../graphql/queries'
import SubredditRow from './SubredditRow'

function Communities() {
  const { data } = useQuery(GET_SUBREDDIT_WITH_LIMIT, {
    variables: {
      limit: 10,
    },
  })

  const subreddits: Subreddit[] = data?.getSubredditListLimit

  if (!subreddits) {
    return (
      <div className="flex w-full items-center justify-center p-10 text-xl">
        <Jelly size={50} color="#FF4501" />
      </div>
    )
  }

  return (
    <div className="sticky top-36 mx-5 mt-5 hidden h-fit min-w-[300px] rounded-md border border-gray-300 bg-white lg:inline">
      <p className="text-md mb-1 p-4 pb-3 font-bold">Communities</p>

      {subreddits?.map((subreddit, i) => (
        <SubredditRow key={subreddit.id} topic={subreddit.topic} index={i} />
      ))}
    </div>
  )
}

export default Communities
