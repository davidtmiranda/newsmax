import { AdvertorialContent } from "../types/advertorial";

type Props = {
  comments?: AdvertorialContent["comments"];
};

export default function Comments({ comments }: Props) {
  if (!comments?.enabled) return null;

  return (
    <section className="comments-section mt-12">
      <div className="border-t border-gray-200 pt-8">
        <h3 className="text-xl font-bold mb-4 text-black">{comments.title}</h3>

        <div className="space-y-8">
          {comments.list.map((comment, index) => (
            <div key={index} className="comment-card">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <img
                    src={comment.avatar}
                    alt={comment.author}
                    className="w-16 h-16 rounded-full object-cover ring-2 ring-gray-100"
                  />
                </div>
                <div className="flex-grow">
                  <h4 className="font-bold text-black">{comment.author}</h4>
                  <p className="text-sm text-gray-600 mb-2">{comment.date}</p>
                  <p className="text-gray-900">{comment.content}</p>
                  {comment.likes && (
                    <div className="mt-2 text-sm text-gray-500">
                      ♥ {comment.likes} curtidas
                    </div>
                  )}
                </div>
              </div>

              {comment.replies && comment.replies.length > 0 && (
                <div className="comment-replies ml-12 mt-4 border-l-2 border-gray-100 pl-4">
                  {comment.replies.map((reply, replyIndex) => (
                    <div
                      key={replyIndex}
                      className="comment-card mb-4 last:mb-0"
                    >
                      <div className="flex gap-4">
                        <div className="flex-grow">
                          <h4 className="font-bold text-black">
                            {reply.author}
                          </h4>
                          <p className="text-sm text-gray-600 mb-2">
                            {reply.date}
                          </p>
                          <p className="text-gray-900">{reply.content}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
          <p className="text-gray-600 text-sm text-center">
            {comments.allowNewComments
              ? "Deixe seu comentário abaixo"
              : "Este conteúdo já não recebe mais comentários."}
          </p>
        </div>
      </div>
    </section>
  );
}
