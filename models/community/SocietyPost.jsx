import mongoose from 'mongoose'

/* SocietySchema will correspond to a collection in your MongoDB database. */
const SocietyPostSchema = new mongoose.Schema({
  
  society_code: { /* Society 번호 */ 
    type: Number, /* Society FK */ 
  },
  post_code: { /* Society 게시글 번호 */
    type: Number, /* Society PK */ 
  },

  post_user_name: { /* Society 게시글 소유자 */
    type: String,
    required: [true],
    maxlength: [39],
  },
  post_owner_ip: { /* 유저 ip */
    type: String,
    maxlength: [20],
  },
  post_user_email: { /* 유저 이메일 */
    type: String,
    required: [true],
    maxlength: [39],
  },
  post_user_phone_number: { /* 유저 전화번호 */
    type: String,
    required: [true],
    maxlength: [39],
  },

  post_date: { /* Society 게시글 작성일자 */
    type: Date,
  },
  post_update_date: { /* Society 게시글 최종수정일자 */
    type: Date,
  },

  post_title: { /* Society 이름, 제목 */
    type: String,
    required: [true, 'Please provide a name for this Society.'],
    maxlength: [99, 'Name cannot be more than 60 characters'],
  },
  post_kind: { /* 사회 종류 */
    type: String,
    required: [true, 'Please specify the kind of your Society.'],
    maxlength: [30, 'kind specified cannot be more than 40 characters'],
  },

  post_like: { /* 좋아요 */
    type: number,
  },
  post_dislike: { /* 싫어요 */
    type: number,
  },
  post_hits: { /* 게시글 조회수 */
    type: number,
  },
  
  post_top_yn: { /* 최상단 게시 여부 */
    type: Boolean,
  },
  post_open_yn: { /* 게시글 노출 여부 */
    type: Boolean
  },
  post_reply_yn: { /* 게시글 답글 여부 */
    type: Boolean
  },
  post_image_yn: { /* 이미지 존재 여부 */
    type: Boolean,
  },
  post_video_yn: { /* 동영상 존재 여부 */
    type: Boolean,
  },
})

export default mongoose.models.SocietyPost || mongoose.model('SocietyPost', SocietyPostSchema)