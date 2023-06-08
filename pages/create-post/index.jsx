import BlogEditor from '@/components/blog-editor';
import { createSlug } from '@/utils/createSlug';
import useSWR from 'swr';
import useSWRMutation from 'swr/mutation';
import { addPost, cacheKey } from '../../api-routes/posts';
import { useRouter } from 'next/router';
import Message

const showMessage = () => (
  <Message>

  </Message>
)

export default function CreatePost() {
  const router = useRouter()
  const { trigger: addTrigger, isMutating } = useSWRMutation(cacheKey, addPost);

  const handleOnSubmit = ({ editorContent, titleInput, image }) => {
    const slug = createSlug(titleInput);
    const title = titleInput;
    const body = editorContent.replaceAll(/<\/?[^>]+(>|$)/gi, '');

    const newPost = { title, slug, body };
    console.log({ title, slug, body });
    console.log('new Post:', newPost);
    addTrigger(newPost);

    setTimeout(() => {
      router.push('/blog')
    }, 2000)
  };

  return (
    <BlogEditor
      heading='Create post'
      onSubmit={handleOnSubmit}
      buttonText='Upload post'
    />
  );
}
