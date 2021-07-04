import useForm from '../../../../hooks/useForm'
import { API_ENDPOINTS } from '../../../../services/constants'
import { joinWithSeparator } from '../../../../utils/string'
import { INITIAL_STATE } from './constants'
import { PropsFromRedux } from './index'

const usePostCreator = ({
  createPostsAction,
  userName
}: Partial<PropsFromRedux>) => {
  const { formValues, handleForm, resetValues } = useForm({
    initialState: INITIAL_STATE
  })

  const handleClick = () => {
    resetValues()
    createPostsAction({
      method: 'post',
      endpoint: API_ENDPOINTS.feed,
      data: formValues
    })
  }

  const isDisabled = !userName

  const createPlaceholder = (): string => {
    if (isDisabled) return 'Login to start interacting.'
    return joinWithSeparator(["What's on your mind, ", userName, '?'], '')
  }

  return {
    handleClick,
    handlePostContent: handleForm,
    postContent: formValues.content as string,
    isDisabled,
    customPlaceholder: createPlaceholder()
  }
}

export default usePostCreator
