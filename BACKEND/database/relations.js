const User = require('../api/models/user.model')
const Userinfo = require('../api/models/user_info.model')
const Post = require('../api/models/posts.model')
const Notifications = require('../api/models/notifications.model')
const Game = require('../api/models/games.model')

const defineRelations = () => {
    // One to one
    User.hasOne(Userinfo)
    Userinfo.belongsTo(User)

    // One to many
    User.hasMany(Post)
    Post.belongsTo(User)

    // Many to many
    Userinfo.belongsToMany(Notifications, { through:'user_info_notifications',
        timestamps: false
     })
    Notifications.belongsToMany(Userinfo, { through:'user_info_notifications',
        timestamps:false
     })

    Post.belongsToMany(Game, { through:'posts_games', 
        timestamps: false
     })
    Game.belongsToMany(Post, { through:'posts_games', 
        timestamps: false
     })
}

module.exports = defineRelations
