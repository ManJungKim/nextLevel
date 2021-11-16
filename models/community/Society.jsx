import mongoose from 'mongoose'

/* SocietySchema will correspond to a collection in your MongoDB database. */
const SocietySchema = new mongoose.Schema({
  
  society_code: { /* Society 번호 */
    type: Number, /* Society PK */ 
  },

  owner_name: { /* Society 소유자 */
    type: String,
    required: [true, "Please provide the Society owner's name"],
    maxlength: [20, "Owner's Name cannot be more than 60 characters"],
  },
  owner_ip: { /* 소유자_ip */
    type: String,
    maxlength: [20, "Owner's Name cannot be more than 60 characters"],
  },
  
  society_kind: { /* 사회 종류 */
    type: String,
    required: [true, 'Please specify the kind of your Society.'],
    maxlength: [30, 'kind specified cannot be more than 40 characters'],
  },
  society_title: { /* Society 이름, 제목 */
    type: String,
    required: [true, 'Please provide a name for this Society.'],
    maxlength: [99, 'Name cannot be more than 60 characters'],
  },
  society_date: { /* Society 생성일자 */
    type: Date,
  },
  
  image_url: { /* 대표 이미지 */
    required: [true, 'Please provide an image url for this Society.'],
    type: String,
  },
  society_close_yn: { /* 노출 여부 */
    type: Boolean,
  },
  society_hits: { /* 사회 접속 조회수 */
    type: number,
  }
})

export default mongoose.models.Society || mongoose.model('Society', SocietySchema)