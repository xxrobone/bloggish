import { useState } from 'react';
import useSWR from 'swr';
import useSWRMutation from 'swr/mutation';
import Comment from '../comment/comment';
import {
  addComment,
  getComments,
  commentsCacheKey,
} from '@/api-routes/comments';

// styles
import styles from './comments.module.scss';

const Comments = ({ slug, id }) => {
  commentsCacheKey;
  // if adding typescript useState<string>("")
  const [state, setState] = useState({
    username: '',
    comment: '',
  });

  const { data: { data: postComments = [] } = {} } = useSWR(
    id ? commentsCacheKey : null,
    () => getComments(id)
  );

  const { trigger: addTrigger, isMutating } = useSWRMutation(
    commentsCacheKey,
    addComment
  );

  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };

  // if adding for type script e: ChangeEvent<HTMLInputElement>
  const handleOnSubmit = async (e, username, comment, id) => {
    e.preventDefault();
    const newComment = { username, comment, post_id: id };
    addTrigger(newComment);
    setState({
      username: '',
      comment: '',
    });
  };

  return (
    <div className={styles.comments_wrapper}>
      <form
        onSubmit={(e) => handleOnSubmit(e, state.username, state.comment, id)}
        className={styles.comments_form}
      >
        <input
          type='text'
          name='username'
          placeholder='Add Username'
          onChange={handleChange}
          value={state.username}
        />
        <input
          type='text'
          name='comment'
          placeholder='Add a comment'
          onChange={handleChange}
          value={state.comment}
        />
        <button type='submit'>Submit</button>
      </form>
      <ul className={styles.comment_list}>
        <h2>Comments ;)</h2>
        {(postComments ?? [])
          .sort((a, b) => {
            const x = new Date(a.created_at);
            const y = new Date(b.created_at);
            return x - y;
          })
          .map((c, i) => (
            <div
              key={c.id + i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: i * 0.2 }}
            >
              <Comment {...c} slug={slug} />
            </div>
          ))}
      </ul>
    </div>
  );
};

export default Comments;
