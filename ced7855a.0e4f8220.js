(window.webpackJsonp=window.webpackJsonp||[]).push([[226],{296:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return i})),r.d(n,"metadata",(function(){return o})),r.d(n,"toc",(function(){return l})),r.d(n,"default",(function(){return d}));var t=r(3),a=r(7),s=(r(0),r(364)),i={title:"include/sleepy_discord/server.h"},o={unversionedId:"reference/Files/server_8h",id:"reference/Files/server_8h",isDocsHomePage:!1,title:"include/sleepy_discord/server.h",description:"Namespaces",source:"@site/docs/reference/Files/server_8h.md",slug:"/reference/Files/server_8h",permalink:"/sleepy-discord/docs/reference/Files/server_8h",version:"current",sidebar:"Reference",previous:{title:"sleepy_discord/server.cpp",permalink:"/sleepy-discord/docs/reference/Files/server_8cpp"},next:{title:"include/sleepy_discord/session.h",permalink:"/sleepy-discord/docs/reference/Files/session_8h"}},l=[{value:"Namespaces",id:"namespaces",children:[]},{value:"Classes",id:"classes",children:[]},{value:"Source code",id:"source-code",children:[]}],c={toc:l};function d(e){var n=e.components,r=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(t.a)({},c,r,{components:n,mdxType:"MDXLayout"}),Object(s.b)("h2",{id:"namespaces"},"Namespaces"),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",{parentName:"tr",align:null},"Name"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},Object(s.b)("strong",{parentName:"td"},Object(s.b)("a",{parentName:"strong",href:"/docs/reference/Namespaces/namespace_sleepy_discord"},"SleepyDiscord")))))),Object(s.b)("h2",{id:"classes"},"Classes"),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",{parentName:"tr",align:null}),Object(s.b)("th",{parentName:"tr",align:null},"Name"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"struct"),Object(s.b)("td",{parentName:"tr",align:null},Object(s.b)("strong",{parentName:"td"},Object(s.b)("a",{parentName:"strong",href:"/docs/reference/Classes/struct_sleepy_discord_1_1_server_member"},"SleepyDiscord::ServerMember")))),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"struct"),Object(s.b)("td",{parentName:"tr",align:null},Object(s.b)("strong",{parentName:"td"},Object(s.b)("a",{parentName:"strong",href:"/docs/reference/Classes/struct_sleepy_discord_1_1_server"},"SleepyDiscord::Server")))),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"struct"),Object(s.b)("td",{parentName:"tr",align:null},Object(s.b)("strong",{parentName:"td"},Object(s.b)("a",{parentName:"strong",href:"/docs/reference/Classes/struct_sleepy_discord_1_1_unavailable_server"},"SleepyDiscord::UnavailableServer")))),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"struct"),Object(s.b)("td",{parentName:"tr",align:null},Object(s.b)("strong",{parentName:"td"},Object(s.b)("a",{parentName:"strong",href:"/docs/reference/Classes/struct_sleepy_discord_1_1_get_default_3_01_unavailable_server_1_1_available_flag_01_4"},"SleepyDiscord::GetDefault< UnavailableServer::AvailableFlag >")))),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"struct"),Object(s.b)("td",{parentName:"tr",align:null},Object(s.b)("strong",{parentName:"td"},Object(s.b)("a",{parentName:"strong",href:"/docs/reference/Classes/struct_sleepy_discord_1_1_get_enum_base_type_3_01_unavailable_server_1_1_available_flag_01_4"},"SleepyDiscord::GetEnumBaseType< UnavailableServer::AvailableFlag >")))),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"class"),Object(s.b)("td",{parentName:"tr",align:null},Object(s.b)("strong",{parentName:"td"},Object(s.b)("a",{parentName:"strong",href:"/docs/reference/Classes/class_sleepy_discord_1_1_server_cache"},"SleepyDiscord::ServerCache")))),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"struct"),Object(s.b)("td",{parentName:"tr",align:null},Object(s.b)("strong",{parentName:"td"},Object(s.b)("a",{parentName:"strong",href:"/docs/reference/Classes/struct_sleepy_discord_1_1_server_widget"},"SleepyDiscord::ServerWidget")))),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"struct"),Object(s.b)("td",{parentName:"tr",align:null},Object(s.b)("strong",{parentName:"td"},Object(s.b)("a",{parentName:"strong",href:"/docs/reference/Classes/struct_sleepy_discord_1_1_server_members_request"},"SleepyDiscord::ServerMembersRequest")))))),Object(s.b)("h2",{id:"source-code"},"Source code"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-cpp"},'#pragma once\n#include <string>\n#include "discord_object_interface.h"\n#include "user.h"\n#include "channel.h"\n#include "snowflake.h"\n#include "cache.h"\n\nnamespace SleepyDiscord {\n    enum Permission : uint64_t;\n    struct Role;\n    \n    /*Guild Member Structure\n    Field     Type     Description\n    user      object   user object\n    nick      string?  this users guild nickname (if one is set)\n    roles     array    array of role object id\'s\n    joined_at datetime date the user joined the guild\n    deaf      bool     if the user is deafened\n    mute      bool     if the user is muted\n    */\n    struct ServerMember : public IdentifiableDiscordObject<User> {\n        ServerMember() = default;\n        //ServerMember(const std::string * rawJson);\n        ServerMember(const nonstd::string_view & rawJSON);\n        ServerMember(const json::Value& json);\n        //ServerMember(const json::Values values);\n        User user;\n        std::string nick;\n        std::vector<Snowflake<Role>> roles;\n        std::string joinedAt;\n        bool deaf = false;\n        bool mute = false;\n        bool pending = false;\n\n        inline operator User&() {\n            return user;\n        }\n\n        //const static std::initializer_list<const char*const> fields;\n        JSONStructStart\n            std::make_tuple(\n                json::pair                           (&ServerMember::user    , "user"     , json::OPTIONAL_FIELD),\n                json::pair                           (&ServerMember::nick    , "nick"     , json::OPTIONAL_FIELD ),\n                json::pair<json::ContainerTypeHelper>(&ServerMember::roles   , "roles"    , json::OPTIONAL_FIELD),\n                json::pair                           (&ServerMember::joinedAt, "joined_at", json::OPTIONAL_FIELD),\n                json::pair                           (&ServerMember::deaf    , "deaf"     , json::OPTIONAL_FIELD),\n                json::pair                           (&ServerMember::mute    , "mute"     , json::OPTIONAL_FIELD),\n                json::pair                           (&ServerMember::pending , "pending"  , json::OPTIONAL_FIELD)\n            );\n        JSONStructEnd\n    };\n\n    struct Server : public IdentifiableDiscordObject<Server> {\n        //~Server();\n        Server() = default;\n        //Server(const std::string * rawJson);\n        Server(const nonstd::string_view & rawJSON);\n        Server(const json::Value& json);\n        //Server(const json::Values values);\n        std::string name;\n        std::string icon;\n        std::string splash;\n        Snowflake<User> ownerID;\n        Permission permissions;\n        std::string region;\n        std::string AFKchannelID;\n        int AFKTimeout;\n        bool embedEnable;\n        std::string embedChannelID;\n        int verificationLevel;\n        int defaultMessageNotifications;\n        std::list<Role> roles;\n        //voice_states\n        //emojis\n        //features\n        bool unavailable;\n\n        //presences\n        int MFALevel;\n        std::string joinedAt;\n        \n        //those are only filled in from the onServer event\n        bool large;\n\n        std::list<ServerMember> members;\n        std::list<Channel> channels;\n\n        std::list<ServerMember>::iterator findMember(const Snowflake<User> userID);\n        std::list<Channel>::iterator findChannel(const Snowflake<Channel> channelID);\n        std::list<Role>::iterator findRole(const Snowflake<Role> roleID);\n\n        //const static std::initializer_list<const char*const> fields;\n        JSONStructStart\n            std::make_tuple(\n                json::pair                           (&Server::ID                         , "id"                           , json::REQUIRIED_FIELD),\n                json::pair                           (&Server::name                       , "name"                         , json::REQUIRIED_FIELD),\n                json::pair                           (&Server::icon                       , "icon"                         , json::NULLABLE_FIELD ),\n                json::pair                           (&Server::splash                     , "splash"                       , json::NULLABLE_FIELD ),\n                json::pair                           (&Server::ownerID                    , "owner_id"                     , json::OPTIONAL_FIELD ),\n                json::pair<UInt64StrTypeHelper      >(&Server::permissions                , "permissions"                  , json::OPTIONAL_FIELD ),\n                json::pair                           (&Server::region                     , "region"                       , json::OPTIONAL_FIELD ),\n                json::pair                           (&Server::AFKchannelID               , "afk_channel_id"               , json::NULLABLE_FIELD ),\n                json::pair                           (&Server::AFKTimeout                 , "afk_timeout"                  , json::OPTIONAL_FIELD ),\n                json::pair                           (&Server::embedEnable                , "widget_enabled"               , json::OPTIONAL_FIELD ),\n                json::pair                           (&Server::embedChannelID             , "widget_channel_id"            , json::OPTIONAL_FIELD ),\n                json::pair                           (&Server::verificationLevel          , "verification_level"           , json::OPTIONAL_FIELD ),\n                json::pair                           (&Server::defaultMessageNotifications, "default_message_notifications", json::OPTIONAL_FIELD ),\n                json::pair<json::ContainerTypeHelper>(&Server::roles                      , "roles"                        , json::OPTIONAL_FIELD ),\n                json::pair                           (&Server::unavailable                , "unavailable"                  , json::OPTIONAL_FIELD ),\n                json::pair                           (&Server::MFALevel                   , "mfa_level"                    , json::OPTIONAL_FIELD ),\n                json::pair                           (&Server::joinedAt                   , "joined_at"                    , json::OPTIONAL_FIELD ),\n                json::pair                           (&Server::large                      , "large"                        , json::OPTIONAL_FIELD ),\n                json::pair<json::ContainerTypeHelper>(&Server::members                    , "members"                      , json::OPTIONAL_FIELD ),\n                json::pair<json::ContainerTypeHelper>(&Server::channels                   , "channels"                     , json::OPTIONAL_FIELD )\n            );\n        JSONStructEnd\n    };\n\n    struct UnavailableServer : public IdentifiableDiscordObject<Server> {\n        UnavailableServer() = default;\n        //UnavailableServer(const std::string * rawJson);\n        UnavailableServer(const nonstd::string_view & rawJSON);\n        UnavailableServer(const json::Value& json);\n        //UnavailableServer(const json::Values values);\n\n        enum class AvailableFlag : int8_t {\n            NotSet = \'\\xFE\', //-2 in hex\n            Unavaiable = true,\n            avaiable = false,\n        };\n        AvailableFlag unavailable = AvailableFlag::NotSet;\n\n        JSONStructStart\n            std::make_tuple(\n                json::pair(&UnavailableServer::ID, "id", json::REQUIRIED_FIELD),\n                json::pair<json::EnumTypeHelper>\n                (&UnavailableServer::unavailable, "unavailable", json::OPTIONAL_FIELD)\n            );\n        JSONStructEnd\n    };\n\n    template<>\n    struct GetDefault<UnavailableServer::AvailableFlag> {\n        static inline const UnavailableServer::AvailableFlag get() {\n            return UnavailableServer::AvailableFlag::NotSet;\n        } \n    };\n\n    template<>\n    struct GetEnumBaseType<UnavailableServer::AvailableFlag> {\n        //this makes the json wrapper know to use getBool instead of getInt\n        using Value = bool; \n    };\n\n    class ServerCache : public Cache<Server> {\n    public:\n        using Cache<Server>::Cache;\n        ServerCache() : Cache() {} //for some odd reason the default constructor isn\'t inherited\n        ServerCache(Cache<Server> list) : Cache<Server>(list) {}\n\n        /*\n        //Linear time complexity if unordered map: to do figure out how to do this with constant time complexity\n        template<class Container, class Object>\n        iterator findOneWithObject(Container Server::*list, const Snowflake<Object>& objectID) {\n            return std::find_if(begin(), end(), [&objectID, list](Server& server) {\n                auto result = objectID.findObject(server.*list);\n                return result != std::end(server.*list);\n            });\n        }\n        */\n\n        inline const_iterator findSeverWith(const Snowflake<Channel>& channelID) {\n            return findOneWithObject(&Server::channels, channelID);\n        }\n\n        inline const_iterator findServerWith(const Snowflake<Role> roleID) {\n            return findOneWithObject(&Server::roles, roleID);\n        }\n\n        //Linear time complexity if using list\n        //Usually Constant time complexity if using unordered maps\n        inline iterator findServer(const Snowflake<Server> serverID) {\n            return serverID.findObject(*this);\n        }\n    };\n\n    struct ServerWidget : public DiscordObject {\n        ServerWidget() = default;\n        //ServerWidget(const std::string * rawJson);\n        ServerWidget(const nonstd::string_view & rawJSON);\n        ServerWidget(const json::Value& json);\n        //ServerWidget(const json::Values values);\n        bool enabled;\n        Snowflake<Channel> channelID;\n\n        //const static std::initializer_list<const char*const> fields;\n        JSONStructStart\n            std::make_tuple(\n                json::pair(&ServerWidget::enabled  , "enabled"   , json::REQUIRIED_FIELD),\n                json::pair(&ServerWidget::channelID, "channel_id", json::NULLABLE_FIELD )\n            );\n        JSONStructEnd\n    };\n\n    struct ServerMembersRequest {\n        ServerMembersRequest() = default;\n        ServerMembersRequest(const json::Value& json);\n        ServerMembersRequest(const nonstd::string_view & json);\n        Snowflake<Server> serverID;\n        std::string query;\n        int limit;\n        bool presence;\n        std::vector<Snowflake<User>> userIDs;\n        std::string nonce;\n        \n        JSONStructStart\n            std::make_tuple(\n                json::pair(&ServerMembersRequest::serverID, "guild_id" , json::REQUIRIED_FIELD),\n                json::pair(&ServerMembersRequest::query   , "query"    , json::OPTIONAL_FIELD ),\n                json::pair(&ServerMembersRequest::limit   , "limit"    , json::REQUIRIED_FIELD),\n                json::pair(&ServerMembersRequest::presence, "presences", json::OPTIONAL_FIELD ),\n                json::pair<json::ContainerTypeHelper>(&ServerMembersRequest::userIDs , "user_ids" , json::OPTIONAL_FIELD ), \n                json::pair(&ServerMembersRequest::nonce   , "nonce"    , json::OPTIONAL_FIELD )\n            );\n        JSONStructEnd\n    };\n}\n')),Object(s.b)("hr",null),Object(s.b)("p",null,"Updated on 10 April 2021 at 22:46:48 UTC"))}d.isMDXComponent=!0},364:function(e,n,r){"use strict";r.d(n,"a",(function(){return b})),r.d(n,"b",(function(){return v}));var t=r(0),a=r.n(t);function s(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){s(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},s=Object.keys(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),d=function(e){var n=a.a.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},b=function(e){var n=d(e.components);return a.a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},p=a.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,s=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=d(r),p=t,v=b["".concat(i,".").concat(p)]||b[p]||u[p]||s;return r?a.a.createElement(v,o(o({ref:n},c),{},{components:r})):a.a.createElement(v,o({ref:n},c))}));function v(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var s=r.length,i=new Array(s);i[0]=p;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:t,i[1]=o;for(var c=2;c<s;c++)i[c]=r[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"}}]);