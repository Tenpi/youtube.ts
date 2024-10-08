import {assert} from "chai"
import "mocha"
import {youtube} from "./login"

describe("Videos", async function() {
    it("should get a video", async function() {
        const response = await youtube.videos.get("https://www.youtube.com/watch?v=ufXPPpeFJ6E")
        assert(response.hasOwnProperty("contentDetails"))
    })

    it("should search for videos", async function() {
        const response = await youtube.videos.search({q: "osu"})
        assert(response.hasOwnProperty("items"))
    })

    it("should get all comments on a video", async function() {
        const response = await youtube.videos.comments("https://www.youtube.com/watch?v=ufXPPpeFJ6E")
        assert(response.hasOwnProperty("items"))
    })
})
