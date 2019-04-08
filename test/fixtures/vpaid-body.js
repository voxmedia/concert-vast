var IV = (function(SCOPE) {
  SCOPE.baseData = {};

  SCOPE.baseData.app_data = {
    isPreroll: true,
    video: {
      url: '',
      sourceURL: 'https://s-static.innovid.com/assets/72054/258113/source_72054_258113.mp4',
      width: 1920,
      height: 1080,
      duration: 15.04,
      renditions: {
        webm: 'https://s-static.innovid.com/media/encoded/03_19/217191/3_source_72054_258113.webm',
        'low.mp4': 'https://s-static.innovid.com/media/encoded/03_19/217191/8_source_72054_258113.mp4',
        'high.mp4': 'https://s-static.innovid.com/media/encoded/03_19/217191/11_source_72054_258113.mp4',
        iphone_stream: 'https://s-static.innovid.com/media/encoded/03_19/217191/27_source_72054_258113.m3u8',
        short_segment_iphone_stream:
          'https://s-static.innovid.com/media/encoded/03_19/217191/29_source_72054_258113.m3u8',
      },
    },
    'video-clicks': {
      'click-thru-url':
        'https://ad.doubleclick.net/ddm/trackclk/N5823.2093103DBM/B22391354.242042271;dc_trk_aid=438761107;dc_trk_cid=113175819;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=',
    },
    'placement-config': {
      'hotspot-clicks': [
        {
          id: 'Bug_Clicked',
          type: 'click-thru',
          main: 'https://www8.hp.com/us/en/printers/officejet-pro-printers.html',
        },
        {
          id: 'main',
          type: 'click-thru',
          main:
            'https://ad.doubleclick.net/ddm/trackclk/N5823.2093103DBM/B22391354.242042271;dc_trk_aid=438761107;dc_trk_cid=113175819;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=',
        },
      ],
      'placement-hash': '1ltnmb',
      'project-hash': '1hg30o',
      'client-id': 3749,
      'channel-id': 1219326,
      'publisher-id': 4847,
      'advertiser-id': 2,
      'placements-group-id': 1232661,
      'campaign-id': 72054,
      'video-id': 399601,
      'placement-tag-id': 0,
      'project-state': 2,
      'child-manual-project-state': 9,
      'child-auto-project-state': 11,
      real_estate_id: 414281,
      'survey-data': null,
      'ivcexdata-enabled': true,
      'tracking-events': {
        playingStart: [
          {
            type: 'url-tracking',
            data:
              'https://ad.doubleclick.net/ddm/trackimp/N5823.2093103DBM/B22391354.242042271;dc_trk_aid=438761107;dc_trk_cid=113175819;ord=[timestamp];dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=?',
          },
          { type: 'url-tracking', data: 'https://dts.innovid.com/placement/1ltnmb/uuid?cb=[timestamp]' },
          {
            type: 'html-tracking',
            data:
              '<script type="text/javascript">\nvar axel = Math.random() + "";\nvar a = axel * 10000000000000;\ndocument.write(\'<iframe src="https://2305757.fls.doubleclick.net/activityi;src=2305757;type=hpfy100l;cat=hp_pr0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord=\' + a + \'?" width="1" height="1" frameborder="0" style="display:none"></iframe>\');\n</script>\n<noscript>\n<iframe src="https://2305757.fls.doubleclick.net/activityi;src=2305757;type=hpfy100l;cat=hp_pr0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord=1?" width="1" height="1" frameborder="0" style="display:none"></iframe>\n</noscript>',
          },
        ],
      },
    },
    'error-monitoring-enabled': false,
    'service-config': {
      integral: {
        init_camp_monitor: true,
        use_ecp: false,
        an_id: '923167',
        partner: 'innovid',
        blocking: true,
        timeout: 600,
        useRealBlocking: true,
        adv_entity_id: 254941,
        pub_entity_id: 34305485,
      },
    },
  };
  SCOPE.baseData.config_data = {
    iconSizes: [24, 32, 48, 64, 128],
    previewParam: { width: 500, height: 281, iconSize: 32, trayMargin: 1.05 },
    platformScaling: { mobile: 1, tablet: 1, desktop: 1, tv: 2 },
    aspectRatio: 1.3,
    googleMapsApiKey: 'AIzaSyAIvRFdH46ZxXWyLgE3_OjsL61tjxCDtS4',
    moat: { disableFlash: 0, partnerCode: 'innovidintvpaid2js125985325015' },
    dv: {
      url:
        'https://cdn.doubleverify.com/dvvid_src.js?ctx=<%= ctx %>&cmp=<%= cmp %>&sid=<%= sid %>&crt=1&plc=<%= plc %>&adsrv=118&tagformat=2&tagtype=video&dvtagver=6.1.src&DVP_GVACB=<%= cb %>',
      'blocking-url':
        'https://cdn.doubleverify.com/dvbs_src.js?ctx=<%= ctx %>&cmp=<%= cmp %>&sid=<%= sid %>&crt=1&plc=<%= plc %>&adsrv=118&tagformat=2&tagtype=video&dvtagver=6.1.src&adid=<%= cb %>&DVP_DCB=<%= bcb %>',
    },
    comscore: { partnerId: 'Innovid' },
    nielsen_dbe: {
      survey_url:
        'https://secure-gl.imrworldwide.com/u/t/{survey-id}/video_tag.html?cr={iv_creativeid}&ce={iv_publisherid}-innovid&pc={iv_placementid}&wc=wc1&am=52&tt=5&view=300x300&show={show}&mode=s&width={player-width}&height={player-height}&bgcolor=000000&uuid={sessionid}',
    },
  };
  SCOPE.baseData.cssPath = 'https://s-static.innovid.com/mobileapps/s/js/vpaid/1ltnmb.css?cb=4.6.3334&secured=1';

  SCOPE.baseData.config_data.mode = 'js';
  SCOPE.baseData.targetElement = 'div#content';
  SCOPE.baseData.appPath = 'https://s-cdn.innovid.com/m/';
  SCOPE.baseData.servicePath = 'https://s-c-service.innovid.com';
  SCOPE.baseData.nonCdnServicePath = 'https://service.innovid.com';
  SCOPE.baseData.reportUrl = 'https://s.innovid.com/1x1.gif';
  SCOPE.baseData.errorReportUrl = 'https://s3.amazonaws.com/innovid-iroll-runtime/1x1.gif';
  SCOPE.baseData.runtimeConfigUrl = 'https://s-static.innovid.com/runtime/iroll-runtime-config.js';
  SCOPE.baseData.mobileCoreVersion = '4.6.3334';
  SCOPE.baseData.staticDomain = 'static.innovid.com';
  SCOPE.baseData.securedStaticDomain = 's-static.innovid.com';
  SCOPE.baseData.dtsUrl = 'https://dts.innovid.com';

  SCOPE.baseData.featureBits = {
    vpaid_clktru_handle_by_innovid_for_non_in_app: false,
    vpaid_viewability_geo_friendly_iframe: true,
  };

  return SCOPE;
})(IV || {});

/* Zepto v1.1.4 - zepto event ajax form ie - zeptojs.com/license */
var Zepto = (function() {
  function L(t) {
    return null == t ? String(t) : j[S.call(t)] || 'object';
  }
  function Z(t) {
    return 'function' == L(t);
  }
  function $(t) {
    return null != t && t == t.window;
  }
  function _(t) {
    return null != t && t.nodeType == t.DOCUMENT_NODE;
  }
  function D(t) {
    return 'object' == L(t);
  }
  function R(t) {
    return D(t) && !$(t) && Object.getPrototypeOf(t) == Object.prototype;
  }
  function M(t) {
    return 'number' == typeof t.length;
  }
  function k(t) {
    return s.call(t, function(t) {
      return null != t;
    });
  }
  function z(t) {
    return t.length > 0 ? n.fn.concat.apply([], t) : t;
  }
  function F(t) {
    return t
      .replace(/::/g, '/')
      .replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2')
      .replace(/([a-z\d])([A-Z])/g, '$1_$2')
      .replace(/_/g, '-')
      .toLowerCase();
  }
  function q(t) {
    return t in f ? f[t] : (f[t] = new RegExp('(^|\\s)' + t + '(\\s|$)'));
  }
  function H(t, e) {
    return 'number' != typeof e || c[F(t)] ? e : e + 'px';
  }
  function I(t) {
    var e, n;
    return (
      u[t] ||
        ((e = a.createElement(t)),
        a.body.appendChild(e),
        (n = getComputedStyle(e, '').getPropertyValue('display')),
        e.parentNode.removeChild(e),
        'none' == n && (n = 'block'),
        (u[t] = n)),
      u[t]
    );
  }
  function V(t) {
    return 'children' in t
      ? o.call(t.children)
      : n.map(t.childNodes, function(t) {
          return 1 == t.nodeType ? t : void 0;
        });
  }
  function B(n, i, r) {
    for (e in i)
      r && (R(i[e]) || A(i[e]))
        ? (R(i[e]) && !R(n[e]) && (n[e] = {}), A(i[e]) && !A(n[e]) && (n[e] = []), B(n[e], i[e], r))
        : i[e] !== t && (n[e] = i[e]);
  }
  function U(t, e) {
    return null == e ? n(t) : n(t).filter(e);
  }
  function J(t, e, n, i) {
    return Z(e) ? e.call(t, n, i) : e;
  }
  function X(t, e, n) {
    null == n ? t.removeAttribute(e) : t.setAttribute(e, n);
  }
  function W(e, n) {
    var i = e.className,
      r = i && i.baseVal !== t;
    return n === t ? (r ? i.baseVal : i) : void (r ? (i.baseVal = n) : (e.className = n));
  }
  function Y(t) {
    var e;
    try {
      return t
        ? 'true' == t ||
            ('false' == t
              ? !1
              : 'null' == t
              ? null
              : /^0/.test(t) || isNaN((e = Number(t)))
              ? /^[\[\{]/.test(t)
                ? n.parseJSON(t)
                : t
              : e)
        : t;
    } catch (i) {
      return t;
    }
  }
  function G(t, e) {
    e(t);
    for (var n = 0, i = t.childNodes.length; i > n; n++) G(t.childNodes[n], e);
  }
  var t,
    e,
    n,
    i,
    C,
    N,
    r = [],
    o = r.slice,
    s = r.filter,
    a = window.document,
    u = {},
    f = {},
    c = { 'column-count': 1, columns: 1, 'font-weight': 1, 'line-height': 1, opacity: 1, 'z-index': 1, zoom: 1 },
    l = /^\s*<(\w+|!)[^>]*>/,
    h = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    p = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    d = /^(?:body|html)$/i,
    m = /([A-Z])/g,
    g = ['val', 'css', 'html', 'text', 'data', 'width', 'height', 'offset'],
    v = ['after', 'prepend', 'before', 'append'],
    y = a.createElement('table'),
    x = a.createElement('tr'),
    b = { tr: a.createElement('tbody'), tbody: y, thead: y, tfoot: y, td: x, th: x, '*': a.createElement('div') },
    w = /complete|loaded|interactive/,
    E = /^[\w-]*$/,
    j = {},
    S = j.toString,
    T = {},
    O = a.createElement('div'),
    P = {
      tabindex: 'tabIndex',
      readonly: 'readOnly',
      for: 'htmlFor',
      class: 'className',
      maxlength: 'maxLength',
      cellspacing: 'cellSpacing',
      cellpadding: 'cellPadding',
      rowspan: 'rowSpan',
      colspan: 'colSpan',
      usemap: 'useMap',
      frameborder: 'frameBorder',
      contenteditable: 'contentEditable',
    },
    A =
      Array.isArray ||
      function(t) {
        return t instanceof Array;
      };
  return (
    (T.matches = function(t, e) {
      if (!e || !t || 1 !== t.nodeType) return !1;
      var n = t.webkitMatchesSelector || t.mozMatchesSelector || t.oMatchesSelector || t.matchesSelector;
      if (n) return n.call(t, e);
      var i,
        r = t.parentNode,
        o = !r;
      return o && (r = O).appendChild(t), (i = ~T.qsa(r, e).indexOf(t)), o && O.removeChild(t), i;
    }),
    (C = function(t) {
      return t.replace(/-+(.)?/g, function(t, e) {
        return e ? e.toUpperCase() : '';
      });
    }),
    (N = function(t) {
      return s.call(t, function(e, n) {
        return t.indexOf(e) == n;
      });
    }),
    (T.fragment = function(e, i, r) {
      var s, u, f;
      return (
        h.test(e) && (s = n(a.createElement(RegExp.$1))),
        s ||
          (e.replace && (e = e.replace(p, '<$1></$2>')),
          i === t && (i = l.test(e) && RegExp.$1),
          i in b || (i = '*'),
          (f = b[i]),
          (f.innerHTML = '' + e),
          (s = n.each(o.call(f.childNodes), function() {
            f.removeChild(this);
          }))),
        R(r) &&
          ((u = n(s)),
          n.each(r, function(t, e) {
            g.indexOf(t) > -1 ? u[t](e) : u.attr(t, e);
          })),
        s
      );
    }),
    (T.Z = function(t, e) {
      return (t = t || []), (t.__proto__ = n.fn), (t.selector = e || ''), t;
    }),
    (T.isZ = function(t) {
      return t instanceof T.Z;
    }),
    (T.init = function(e, i) {
      var r;
      if (!e) return T.Z();
      if ('string' == typeof e)
        if (((e = e.trim()), '<' == e[0] && l.test(e))) (r = T.fragment(e, RegExp.$1, i)), (e = null);
        else {
          if (i !== t) return n(i).find(e);
          r = T.qsa(a, e);
        }
      else {
        if (Z(e)) return n(a).ready(e);
        if (T.isZ(e)) return e;
        if (A(e)) r = k(e);
        else if (D(e)) (r = [e]), (e = null);
        else if (l.test(e)) (r = T.fragment(e.trim(), RegExp.$1, i)), (e = null);
        else {
          if (i !== t) return n(i).find(e);
          r = T.qsa(a, e);
        }
      }
      return T.Z(r, e);
    }),
    (n = function(t, e) {
      return T.init(t, e);
    }),
    (n.extend = function(t) {
      var e,
        n = o.call(arguments, 1);
      return (
        'boolean' == typeof t && ((e = t), (t = n.shift())),
        n.forEach(function(n) {
          B(t, n, e);
        }),
        t
      );
    }),
    (T.qsa = function(t, e) {
      var n,
        i = '#' == e[0],
        r = !i && '.' == e[0],
        s = i || r ? e.slice(1) : e,
        a = E.test(s);
      return _(t) && a && i
        ? (n = t.getElementById(s))
          ? [n]
          : []
        : 1 !== t.nodeType && 9 !== t.nodeType
        ? []
        : o.call(a && !i ? (r ? t.getElementsByClassName(s) : t.getElementsByTagName(e)) : t.querySelectorAll(e));
    }),
    (n.contains = a.documentElement.contains
      ? function(t, e) {
          return t !== e && t.contains(e);
        }
      : function(t, e) {
          for (; e && (e = e.parentNode); ) if (e === t) return !0;
          return !1;
        }),
    (n.type = L),
    (n.isFunction = Z),
    (n.isWindow = $),
    (n.isArray = A),
    (n.isPlainObject = R),
    (n.isEmptyObject = function(t) {
      var e;
      for (e in t) return !1;
      return !0;
    }),
    (n.inArray = function(t, e, n) {
      return r.indexOf.call(e, t, n);
    }),
    (n.camelCase = C),
    (n.trim = function(t) {
      return null == t ? '' : String.prototype.trim.call(t);
    }),
    (n.uuid = 0),
    (n.support = {}),
    (n.expr = {}),
    (n.map = function(t, e) {
      var n,
        r,
        o,
        i = [];
      if (M(t)) for (r = 0; r < t.length; r++) (n = e(t[r], r)), null != n && i.push(n);
      else for (o in t) (n = e(t[o], o)), null != n && i.push(n);
      return z(i);
    }),
    (n.each = function(t, e) {
      var n, i;
      if (M(t)) {
        for (n = 0; n < t.length; n++) if (e.call(t[n], n, t[n]) === !1) return t;
      } else for (i in t) if (e.call(t[i], i, t[i]) === !1) return t;
      return t;
    }),
    (n.grep = function(t, e) {
      return s.call(t, e);
    }),
    window.JSON && (n.parseJSON = JSON.parse),
    n.each('Boolean Number String Function Array Date RegExp Object Error'.split(' '), function(t, e) {
      j['[object ' + e + ']'] = e.toLowerCase();
    }),
    (n.fn = {
      forEach: r.forEach,
      reduce: r.reduce,
      push: r.push,
      sort: r.sort,
      indexOf: r.indexOf,
      concat: r.concat,
      map: function(t) {
        return n(
          n.map(this, function(e, n) {
            return t.call(e, n, e);
          })
        );
      },
      slice: function() {
        return n(o.apply(this, arguments));
      },
      ready: function(t) {
        return (
          w.test(a.readyState) && a.body
            ? t(n)
            : a.addEventListener(
                'DOMContentLoaded',
                function() {
                  t(n);
                },
                !1
              ),
          this
        );
      },
      get: function(e) {
        return e === t ? o.call(this) : this[e >= 0 ? e : e + this.length];
      },
      toArray: function() {
        return this.get();
      },
      size: function() {
        return this.length;
      },
      remove: function() {
        return this.each(function() {
          null != this.parentNode && this.parentNode.removeChild(this);
        });
      },
      each: function(t) {
        return (
          r.every.call(this, function(e, n) {
            return t.call(e, n, e) !== !1;
          }),
          this
        );
      },
      filter: function(t) {
        return Z(t)
          ? this.not(this.not(t))
          : n(
              s.call(this, function(e) {
                return T.matches(e, t);
              })
            );
      },
      add: function(t, e) {
        return n(N(this.concat(n(t, e))));
      },
      is: function(t) {
        return this.length > 0 && T.matches(this[0], t);
      },
      not: function(e) {
        var i = [];
        if (Z(e) && e.call !== t)
          this.each(function(t) {
            e.call(this, t) || i.push(this);
          });
        else {
          var r = 'string' == typeof e ? this.filter(e) : M(e) && Z(e.item) ? o.call(e) : n(e);
          this.forEach(function(t) {
            r.indexOf(t) < 0 && i.push(t);
          });
        }
        return n(i);
      },
      has: function(t) {
        return this.filter(function() {
          return D(t)
            ? n.contains(this, t)
            : n(this)
                .find(t)
                .size();
        });
      },
      eq: function(t) {
        return -1 === t ? this.slice(t) : this.slice(t, +t + 1);
      },
      first: function() {
        var t = this[0];
        return t && !D(t) ? t : n(t);
      },
      last: function() {
        var t = this[this.length - 1];
        return t && !D(t) ? t : n(t);
      },
      find: function(t) {
        var e,
          i = this;
        return (e = t
          ? 'object' == typeof t
            ? n(t).filter(function() {
                var t = this;
                return r.some.call(i, function(e) {
                  return n.contains(e, t);
                });
              })
            : 1 == this.length
            ? n(T.qsa(this[0], t))
            : this.map(function() {
                return T.qsa(this, t);
              })
          : []);
      },
      closest: function(t, e) {
        var i = this[0],
          r = !1;
        for ('object' == typeof t && (r = n(t)); i && !(r ? r.indexOf(i) >= 0 : T.matches(i, t)); )
          i = i !== e && !_(i) && i.parentNode;
        return n(i);
      },
      parents: function(t) {
        for (var e = [], i = this; i.length > 0; )
          i = n.map(i, function(t) {
            return (t = t.parentNode) && !_(t) && e.indexOf(t) < 0 ? (e.push(t), t) : void 0;
          });
        return U(e, t);
      },
      parent: function(t) {
        return U(N(this.pluck('parentNode')), t);
      },
      children: function(t) {
        return U(
          this.map(function() {
            return V(this);
          }),
          t
        );
      },
      contents: function() {
        return this.map(function() {
          return o.call(this.childNodes);
        });
      },
      siblings: function(t) {
        return U(
          this.map(function(t, e) {
            return s.call(V(e.parentNode), function(t) {
              return t !== e;
            });
          }),
          t
        );
      },
      empty: function() {
        return this.each(function() {
          this.innerHTML = '';
        });
      },
      pluck: function(t) {
        return n.map(this, function(e) {
          return e[t];
        });
      },
      show: function() {
        return this.each(function() {
          'none' == this.style.display && (this.style.display = ''),
            'none' == (getComputedStyle(this, '') ? getComputedStyle(this, '').getPropertyValue('display') : '') &&
              (this.style.display = I(this.nodeName));
        });
      },
      replaceWith: function(t) {
        return this.before(t).remove();
      },
      wrap: function(t) {
        var e = Z(t);
        if (this[0] && !e)
          var i = n(t).get(0),
            r = i.parentNode || this.length > 1;
        return this.each(function(o) {
          n(this).wrapAll(e ? t.call(this, o) : r ? i.cloneNode(!0) : i);
        });
      },
      wrapAll: function(t) {
        if (this[0]) {
          n(this[0]).before((t = n(t)));
          for (var e; (e = t.children()).length; ) t = e.first();
          n(t).append(this);
        }
        return this;
      },
      wrapInner: function(t) {
        var e = Z(t);
        return this.each(function(i) {
          var r = n(this),
            o = r.contents(),
            s = e ? t.call(this, i) : t;
          o.length ? o.wrapAll(s) : r.append(s);
        });
      },
      unwrap: function() {
        return (
          this.parent().each(function() {
            n(this).replaceWith(n(this).children());
          }),
          this
        );
      },
      clone: function() {
        return this.map(function() {
          return this.cloneNode(!0);
        });
      },
      hide: function() {
        return this.css('display', 'none');
      },
      toggle: function(e) {
        return this.each(function() {
          var i = n(this);
          (e === t ? 'none' == i.css('display') : e) ? i.show() : i.hide();
        });
      },
      prev: function(t) {
        return n(this.pluck('previousElementSibling')).filter(t || '*');
      },
      next: function(t) {
        return n(this.pluck('nextElementSibling')).filter(t || '*');
      },
      html: function(t) {
        return 0 in arguments
          ? this.each(function(e) {
              var i = this.innerHTML;
              n(this)
                .empty()
                .append(J(this, t, e, i));
            })
          : 0 in this
          ? this[0].innerHTML
          : null;
      },
      text: function(t) {
        return 0 in arguments
          ? this.each(function(e) {
              var n = J(this, t, e, this.textContent);
              this.textContent = null == n ? '' : '' + n;
            })
          : 0 in this
          ? this[0].textContent
          : null;
      },
      attr: function(n, i) {
        var r;
        return 'string' != typeof n || 1 in arguments
          ? this.each(function(t) {
              if (1 === this.nodeType)
                if (D(n)) for (e in n) X(this, e, n[e]);
                else X(this, n, J(this, i, t, this.getAttribute(n)));
            })
          : this.length && 1 === this[0].nodeType
          ? !(r = this[0].getAttribute(n)) && n in this[0]
            ? this[0][n]
            : r
          : t;
      },
      removeAttr: function(t) {
        return this.each(function() {
          1 === this.nodeType && X(this, t);
        });
      },
      prop: function(t, e) {
        return (
          (t = P[t] || t),
          1 in arguments
            ? this.each(function(n) {
                this[t] = J(this, e, n, this[t]);
              })
            : this[0] && this[0][t]
        );
      },
      data: function(e, n) {
        var i = 'data-' + e.replace(m, '-$1').toLowerCase(),
          r = 1 in arguments ? this.attr(i, n) : this.attr(i);
        return null !== r ? Y(r) : t;
      },
      val: function(t) {
        return 0 in arguments
          ? this.each(function(e) {
              this.value = J(this, t, e, this.value);
            })
          : this[0] &&
              (this[0].multiple
                ? n(this[0])
                    .find('option')
                    .filter(function() {
                      return this.selected;
                    })
                    .pluck('value')
                : this[0].value);
      },
      offset: function(t) {
        if (t)
          return this.each(function(e) {
            var i = n(this),
              r = J(this, t, e, i.offset()),
              o = i.offsetParent().offset(),
              s = { top: r.top - o.top, left: r.left - o.left };
            'static' == i.css('position') && (s.position = 'relative'), i.css(s);
          });
        if (!this.length) return null;
        var e;
        try {
          e = this[0].getBoundingClientRect();
        } catch (ex) {
          e = { left: 0, top: 0, width: 0, height: 0 };
        }
        return {
          left: e.left + window.pageXOffset,
          top: e.top + window.pageYOffset,
          width: Math.round(e.width),
          height: Math.round(e.height),
        };
      },
      css: function(t, i) {
        if (arguments.length < 2) {
          var r = this[0],
            o = getComputedStyle(r, '');
          if (!r) return;
          if ('string' == typeof t) return r.style[C(t)] || o.getPropertyValue(t);
          if (A(t)) {
            var s = {};
            return (
              n.each(A(t) ? t : [t], function(t, e) {
                s[e] = r.style[C(e)] || o.getPropertyValue(e);
              }),
              s
            );
          }
        }
        var a = '';
        if ('string' == L(t))
          i || 0 === i
            ? (a = F(t) + ':' + H(t, i))
            : this.each(function() {
                this.style.removeProperty(F(t));
              });
        else
          for (e in t)
            t[e] || 0 === t[e]
              ? (a += F(e) + ':' + H(e, t[e]) + ';')
              : this.each(function() {
                  this.style.removeProperty(F(e));
                });
        return this.each(function() {
          this.style.cssText += ';' + a;
        });
      },
      index: function(t) {
        return t
          ? this.indexOf(n(t)[0])
          : this.parent()
              .children()
              .indexOf(this[0]);
      },
      hasClass: function(t) {
        return t
          ? r.some.call(
              this,
              function(t) {
                return this.test(W(t));
              },
              q(t)
            )
          : !1;
      },
      addClass: function(t) {
        return t
          ? this.each(function(e) {
              i = [];
              var r = W(this),
                o = J(this, t, e, r);
              o.split(/\s+/g).forEach(function(t) {
                n(this).hasClass(t) || i.push(t);
              }, this),
                i.length && W(this, r + (r ? ' ' : '') + i.join(' '));
            })
          : this;
      },
      removeClass: function(e) {
        return this.each(function(n) {
          return e === t
            ? W(this, '')
            : ((i = W(this)),
              J(this, e, n, i)
                .split(/\s+/g)
                .forEach(function(t) {
                  i = i.replace(q(t), ' ');
                }),
              void W(this, i.trim()));
        });
      },
      toggleClass: function(e, i) {
        return e
          ? this.each(function(r) {
              var o = n(this),
                s = J(this, e, r, W(this));
              s.split(/\s+/g).forEach(function(e) {
                (i === t ? !o.hasClass(e) : i) ? o.addClass(e) : o.removeClass(e);
              });
            })
          : this;
      },
      scrollTop: function(e) {
        if (this.length) {
          var n = 'scrollTop' in this[0];
          return e === t
            ? n
              ? this[0].scrollTop
              : this[0].pageYOffset
            : this.each(
                n
                  ? function() {
                      this.scrollTop = e;
                    }
                  : function() {
                      this.scrollTo(this.scrollX, e);
                    }
              );
        }
      },
      scrollLeft: function(e) {
        if (this.length) {
          var n = 'scrollLeft' in this[0];
          return e === t
            ? n
              ? this[0].scrollLeft
              : this[0].pageXOffset
            : this.each(
                n
                  ? function() {
                      this.scrollLeft = e;
                    }
                  : function() {
                      this.scrollTo(e, this.scrollY);
                    }
              );
        }
      },
      position: function() {
        if (this.length) {
          var t = this[0],
            e = this.offsetParent(),
            i = this.offset(),
            r = d.test(e[0].nodeName) ? { top: 0, left: 0 } : e.offset();
          return (
            (i.top -= parseFloat(n(t).css('margin-top')) || 0),
            (i.left -= parseFloat(n(t).css('margin-left')) || 0),
            (r.top += parseFloat(n(e[0]).css('border-top-width')) || 0),
            (r.left += parseFloat(n(e[0]).css('border-left-width')) || 0),
            { top: i.top - r.top, left: i.left - r.left }
          );
        }
      },
      offsetParent: function() {
        return this.map(function() {
          for (var t = this.offsetParent || a.body; t && !d.test(t.nodeName) && 'static' == n(t).css('position'); )
            t = t.offsetParent;
          return t;
        });
      },
    }),
    (n.fn.detach = n.fn.remove),
    ['width', 'height'].forEach(function(e) {
      var i = e.replace(/./, function(t) {
        return t[0].toUpperCase();
      });
      n.fn[e] = function(r) {
        var o,
          s = this[0];
        return r === t
          ? $(s)
            ? s['inner' + i]
            : _(s)
            ? s.documentElement['scroll' + i]
            : (o = this.offset()) && o[e]
          : this.each(function(t) {
              (s = n(this)), s.css(e, J(this, r, t, s[e]()));
            });
      };
    }),
    v.forEach(function(t, e) {
      var i = e % 2;
      (n.fn[t] = function() {
        var t,
          o,
          r = n.map(arguments, function(e) {
            return (t = L(e)), 'object' == t || 'array' == t || null == e ? e : T.fragment(e);
          }),
          s = this.length > 1;
        return r.length < 1
          ? this
          : this.each(function(t, u) {
              (o = i ? u : u.parentNode), (u = 0 == e ? u.nextSibling : 1 == e ? u.firstChild : 2 == e ? u : null);
              var f = n.contains(a.documentElement, o);
              r.forEach(function(t) {
                if (s) t = t.cloneNode(!0);
                else if (!o) return n(t).remove();
                o.insertBefore(t, u),
                  f &&
                    G(t, function(t) {
                      null == t.nodeName ||
                        'SCRIPT' !== t.nodeName.toUpperCase() ||
                        (t.type && 'text/javascript' !== t.type) ||
                        t.src ||
                        window.eval.call(window, t.innerHTML);
                    });
              });
            });
      }),
        (n.fn[i ? t + 'To' : 'insert' + (e ? 'Before' : 'After')] = function(e) {
          return n(e)[t](this), this;
        });
    }),
    (T.Z.prototype = n.fn),
    (T.uniq = N),
    (T.deserializeValue = Y),
    (n.zepto = T),
    n
  );
})();
(window.Zepto = Zepto),
  void 0 === window.$ && (window.$ = Zepto),
  (function(t) {
    function l(t) {
      return t._zid || (t._zid = e++);
    }
    function h(t, e, n, i) {
      if (((e = p(e)), e.ns)) var r = d(e.ns);
      return (s[l(t)] || []).filter(function(t) {
        return !(!t || (e.e && t.e != e.e) || (e.ns && !r.test(t.ns)) || (n && l(t.fn) !== l(n)) || (i && t.sel != i));
      });
    }
    function p(t) {
      var e = ('' + t).split('.');
      return {
        e: e[0],
        ns: e
          .slice(1)
          .sort()
          .join(' '),
      };
    }
    function d(t) {
      return new RegExp('(?:^| )' + t.replace(' ', ' .* ?') + '(?: |$)');
    }
    function m(t, e) {
      return (t.del && !u && t.e in f) || !!e;
    }
    function g(t) {
      return c[t] || (u && f[t]) || t;
    }
    function v(e, i, r, o, a, u, f) {
      var h = l(e),
        d = s[h] || (s[h] = []);
      i.split(/\s/).forEach(function(i) {
        if ('ready' == i) return t(document).ready(r);
        var s = p(i);
        (s.fn = r),
          (s.sel = a),
          s.e in c &&
            (r = function(e) {
              var n = e.relatedTarget;
              return !n || (n !== this && !t.contains(this, n)) ? s.fn.apply(this, arguments) : void 0;
            }),
          (s.del = u);
        var l = u || r;
        (s.proxy = function(t) {
          if (((t = j(t)), !t.isImmediatePropagationStopped())) {
            t.data = o;
            var i = l.apply(e, t._args == n ? [t] : [t].concat(t._args));
            return i === !1 && (t.preventDefault(), t.stopPropagation()), i;
          }
        }),
          (s.i = d.length),
          d.push(s),
          'addEventListener' in e && e.addEventListener(g(s.e), s.proxy, m(s, f));
      });
    }
    function y(t, e, n, i, r) {
      var o = l(t);
      (e || '').split(/\s/).forEach(function(e) {
        h(t, e, n, i).forEach(function(e) {
          delete s[o][e.i], 'removeEventListener' in t && t.removeEventListener(g(e.e), e.proxy, m(e, r));
        });
      });
    }
    function j(e, i) {
      return (
        (i || !e.isDefaultPrevented) &&
          (i || (i = e),
          t.each(E, function(t, n) {
            var r = i[t];
            (e[t] = function() {
              return (this[n] = x), r && r.apply(i, arguments);
            }),
              (e[n] = b);
          }),
          (i.defaultPrevented !== n
            ? i.defaultPrevented
            : 'returnValue' in i
            ? i.returnValue === !1
            : i.getPreventDefault && i.getPreventDefault()) && (e.isDefaultPrevented = x)),
        e
      );
    }
    function S(t) {
      var e,
        i = { originalEvent: t };
      for (e in t) w.test(e) || t[e] === n || (i[e] = t[e]);
      return j(i, t);
    }
    var n,
      e = 1,
      i = Array.prototype.slice,
      r = t.isFunction,
      o = function(t) {
        return 'string' == typeof t;
      },
      s = {},
      a = {},
      u = 'onfocusin' in window,
      f = { focus: 'focusin', blur: 'focusout' },
      c = { mouseenter: 'mouseover', mouseleave: 'mouseout' };
    (a.click = a.mousedown = a.mouseup = a.mousemove = 'MouseEvents'),
      (t.event = { add: v, remove: y }),
      (t.proxy = function(e, n) {
        var s = 2 in arguments && i.call(arguments, 2);
        if (r(e)) {
          var a = function() {
            return e.apply(n, s ? s.concat(i.call(arguments)) : arguments);
          };
          return (a._zid = l(e)), a;
        }
        if (o(n)) return s ? (s.unshift(e[n], e), t.proxy.apply(null, s)) : t.proxy(e[n], e);
        throw new TypeError('expected function');
      }),
      (t.fn.bind = function(t, e, n) {
        return this.on(t, e, n);
      }),
      (t.fn.unbind = function(t, e) {
        return this.off(t, e);
      }),
      (t.fn.one = function(t, e, n, i) {
        return this.on(t, e, n, i, 1);
      });
    var x = function() {
        return !0;
      },
      b = function() {
        return !1;
      },
      w = /^([A-Z]|returnValue$|layer[XY]$)/,
      E = {
        preventDefault: 'isDefaultPrevented',
        stopImmediatePropagation: 'isImmediatePropagationStopped',
        stopPropagation: 'isPropagationStopped',
      };
    (t.fn.delegate = function(t, e, n) {
      return this.on(e, t, n);
    }),
      (t.fn.undelegate = function(t, e, n) {
        return this.off(e, t, n);
      }),
      (t.fn.live = function(e, n) {
        return t(document.body).delegate(this.selector, e, n), this;
      }),
      (t.fn.die = function(e, n) {
        return t(document.body).undelegate(this.selector, e, n), this;
      }),
      (t.fn.on = function(e, s, a, u, f) {
        var c,
          l,
          h = this;
        return e && !o(e)
          ? (t.each(e, function(t, e) {
              h.on(t, s, a, e, f);
            }),
            h)
          : (o(s) || r(u) || u === !1 || ((u = a), (a = s), (s = n)),
            (r(a) || a === !1) && ((u = a), (a = n)),
            u === !1 && (u = b),
            h.each(function(n, r) {
              f &&
                (c = function(t) {
                  return y(r, t.type, u), u.apply(this, arguments);
                }),
                s &&
                  (l = function(e) {
                    var n,
                      o = t(e.target)
                        .closest(s, r)
                        .get(0);
                    return o && o !== r
                      ? ((n = t.extend(S(e), { currentTarget: o, liveFired: r })),
                        (c || u).apply(o, [n].concat(i.call(arguments, 1))))
                      : void 0;
                  }),
                v(r, e, u, a, s, l || c);
            }));
      }),
      (t.fn.off = function(e, i, s) {
        var a = this;
        return e && !o(e)
          ? (t.each(e, function(t, e) {
              a.off(t, i, e);
            }),
            a)
          : (o(i) || r(s) || s === !1 || ((s = i), (i = n)),
            s === !1 && (s = b),
            a.each(function() {
              y(this, e, s, i);
            }));
      }),
      (t.fn.trigger = function(e, n) {
        return (
          (e = o(e) || t.isPlainObject(e) ? t.Event(e) : j(e)),
          (e._args = n),
          this.each(function() {
            'dispatchEvent' in this ? this.dispatchEvent(e) : t(this).triggerHandler(e, n);
          })
        );
      }),
      (t.fn.triggerHandler = function(e, n) {
        var i, r;
        return (
          this.each(function(s, a) {
            (i = S(o(e) ? t.Event(e) : e)),
              (i._args = n),
              (i.target = a),
              t.each(h(a, e.type || e), function(t, e) {
                return (r = e.proxy(i)), i.isImmediatePropagationStopped() ? !1 : void 0;
              });
          }),
          r
        );
      }),
      'focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error'
        .split(' ')
        .forEach(function(e) {
          t.fn[e] = function(t) {
            return t ? this.bind(e, t) : this.trigger(e);
          };
        }),
      ['focus', 'blur'].forEach(function(e) {
        t.fn[e] = function(t) {
          return (
            t
              ? this.bind(e, t)
              : this.each(function() {
                  try {
                    this[e]();
                  } catch (t) {}
                }),
            this
          );
        };
      }),
      (t.Event = function(t, e) {
        o(t) || ((e = t), (t = e.type));
        var n = document.createEvent(a[t] || 'Events'),
          i = !0;
        if (e) for (var r in e) 'bubbles' == r ? (i = !!e[r]) : (n[r] = e[r]);
        return n.initEvent(t, i, !0), j(n);
      });
  })(Zepto),
  (function(t) {
    function l(e, n, i) {
      var r = t.Event(n);
      return t(e).trigger(r, i), !r.isDefaultPrevented();
    }
    function h(t, e, i, r) {
      return t.global ? l(e || n, i, r) : void 0;
    }
    function p(e) {
      e.global && 0 === t.active++ && h(e, null, 'ajaxStart');
    }
    function d(e) {
      e.global && !--t.active && h(e, null, 'ajaxStop');
    }
    function m(t, e) {
      var n = e.context;
      return e.beforeSend.call(n, t, e) === !1 || h(e, n, 'ajaxBeforeSend', [t, e]) === !1
        ? !1
        : void h(e, n, 'ajaxSend', [t, e]);
    }
    function g(t, e, n, i) {
      var r = n.context,
        o = 'success';
      n.success.call(r, t, o, e), i && i.resolveWith(r, [t, o, e]), h(n, r, 'ajaxSuccess', [e, n, t]), y(o, e, n);
    }
    function v(t, e, n, i, r) {
      var o = i.context;
      i.error.call(o, n, e, t), r && r.rejectWith(o, [n, e, t]), h(i, o, 'ajaxError', [n, i, t || e]), y(e, n, i);
    }
    function y(t, e, n) {
      var i = n.context;
      n.complete.call(i, e, t), h(n, i, 'ajaxComplete', [e, n]), d(n);
    }
    function x() {}
    function b(t) {
      return (
        t && (t = t.split(';', 2)[0]),
        (t && (t == f ? 'html' : t == u ? 'json' : s.test(t) ? 'script' : a.test(t) && 'xml')) || 'text'
      );
    }
    function w(t, e) {
      return '' == e ? t : (t + '&' + e).replace(/[&?]{1,2}/, '?');
    }
    function E(e) {
      e.processData && e.data && 'string' != t.type(e.data) && (e.data = t.param(e.data, e.traditional)),
        !e.data || (e.type && 'GET' != e.type.toUpperCase()) || ((e.url = w(e.url, e.data)), (e.data = void 0));
    }
    function j(e, n, i, r) {
      return (
        t.isFunction(n) && ((r = i), (i = n), (n = void 0)),
        t.isFunction(i) || ((r = i), (i = void 0)),
        { url: e, data: n, success: i, dataType: r }
      );
    }
    function T(e, n, i, r) {
      var o,
        s = t.isArray(n),
        a = t.isPlainObject(n);
      t.each(n, function(n, u) {
        (o = t.type(u)),
          r && (n = i ? r : r + '[' + (a || 'object' == o || 'array' == o ? n : '') + ']'),
          !r && s ? e.add(u.name, u.value) : 'array' == o || (!i && 'object' == o) ? T(e, u, i, n) : e.add(n, u);
      });
    }
    var i,
      r,
      e = 0,
      n = window.document,
      o = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
      s = /^(?:text|application)\/javascript/i,
      a = /^(?:text|application)\/xml/i,
      u = 'application/json',
      f = 'text/html',
      c = /^\s*$/;
    (t.active = 0),
      (t.ajaxJSONP = function(i, r) {
        if (!('type' in i)) return t.ajax(i);
        var f,
          h,
          o = i.jsonpCallback,
          s = (t.isFunction(o) ? o() : o) || 'jsonp' + ++e,
          a = n.createElement('script'),
          u = window[s],
          c = function(e) {
            t(a).triggerHandler('error', e || 'abort');
          },
          l = { abort: c };
        return (
          r && r.promise(l),
          t(a).on('load error', function(e, n) {
            clearTimeout(h),
              t(a)
                .off()
                .remove(),
              'error' != e.type && f ? g(f[0], l, i, r) : v(null, n || 'error', l, i, r),
              (window[s] = u),
              f && t.isFunction(u) && u(f[0]),
              (u = f = void 0);
          }),
          m(l, i) === !1
            ? (c('abort'), l)
            : ((window[s] = function() {
                f = arguments;
              }),
              (a.src = i.url.replace(/\?(.+)=\?/, '?$1=' + s)),
              n.head.appendChild(a),
              i.timeout > 0 &&
                (h = setTimeout(function() {
                  c('timeout');
                }, i.timeout)),
              l)
        );
      }),
      (t.ajaxSettings = {
        type: 'GET',
        beforeSend: x,
        success: x,
        error: x,
        complete: x,
        context: null,
        global: !0,
        xhr: function() {
          return new window.XMLHttpRequest();
        },
        accepts: {
          script: 'text/javascript, application/javascript, application/x-javascript',
          json: u,
          xml: 'application/xml, text/xml',
          html: f,
          text: 'text/plain',
        },
        crossDomain: !1,
        timeout: 0,
        processData: !0,
        cache: !0,
      }),
      (t.ajax = function(e) {
        var n = t.extend({}, e || {}),
          o = t.Deferred && t.Deferred();
        for (i in t.ajaxSettings) void 0 === n[i] && (n[i] = t.ajaxSettings[i]);
        p(n),
          n.crossDomain || (n.crossDomain = /^([\w-]+:)?\/\/([^\/]+)/.test(n.url) && RegExp.$2 != window.location.host),
          n.url || (n.url = window.location.toString()),
          E(n);
        var s = n.dataType,
          a = /\?.+=\?/.test(n.url);
        if (
          (a && (s = 'jsonp'),
          (n.cache !== !1 && ((e && e.cache === !0) || ('script' != s && 'jsonp' != s))) ||
            (n.url = w(n.url, '_=' + Date.now())),
          'jsonp' == s)
        )
          return (
            a || (n.url = w(n.url, n.jsonp ? n.jsonp + '=?' : n.jsonp === !1 ? '' : 'callback=?')), t.ajaxJSONP(n, o)
          );
        var j,
          u = n.accepts[s],
          f = {},
          l = function(t, e) {
            f[t.toLowerCase()] = [t, e];
          },
          h = /^([\w-]+:)\/\//.test(n.url) ? RegExp.$1 : window.location.protocol,
          d = n.xhr(),
          y = d.setRequestHeader;
        if (
          (o && o.promise(d),
          n.crossDomain || l('X-Requested-With', 'XMLHttpRequest'),
          l('Accept', u || '*/*'),
          (u = n.mimeType || u) &&
            (u.indexOf(',') > -1 && (u = u.split(',', 2)[0]), d.overrideMimeType && d.overrideMimeType(u)),
          (n.contentType || (n.contentType !== !1 && n.data && 'GET' != n.type.toUpperCase())) &&
            l('Content-Type', n.contentType || 'application/x-www-form-urlencoded'),
          n.headers)
        )
          for (r in n.headers) l(r, n.headers[r]);
        if (
          ((d.setRequestHeader = l),
          (d.onreadystatechange = function() {
            if (4 == d.readyState) {
              (d.onreadystatechange = x), clearTimeout(j);
              var e,
                i = !1;
              if ((d.status >= 200 && d.status < 300) || 304 == d.status || (0 == d.status && 'file:' == h)) {
                (s = s || b(n.mimeType || d.getResponseHeader('content-type'))), (e = d.responseText);
                try {
                  'script' == s
                    ? (1, eval)(e)
                    : 'xml' == s
                    ? (e = d.responseXML)
                    : 'json' == s && (e = c.test(e) ? null : t.parseJSON(e));
                } catch (r) {
                  i = r;
                }
                i ? v(i, 'parsererror', d, n, o) : g(e, d, n, o);
              } else v(d.statusText || null, d.status ? 'error' : 'abort', d, n, o);
            }
          }),
          m(d, n) === !1)
        )
          return d.abort(), v(null, 'abort', d, n, o), d;
        if (n.xhrFields) for (r in n.xhrFields) d[r] = n.xhrFields[r];
        var S = 'async' in n ? n.async : !0;
        d.open(n.type, n.url, S, n.username, n.password);
        for (r in f) y.apply(d, f[r]);
        return (
          n.timeout > 0 &&
            (j = setTimeout(function() {
              (d.onreadystatechange = x), d.abort(), v(null, 'timeout', d, n, o);
            }, n.timeout)),
          d.send(n.data ? n.data : null),
          d
        );
      }),
      (t.get = function() {
        return t.ajax(j.apply(null, arguments));
      }),
      (t.post = function() {
        var e = j.apply(null, arguments);
        return (e.type = 'POST'), t.ajax(e);
      }),
      (t.getJSON = function() {
        var e = j.apply(null, arguments);
        return (e.dataType = 'json'), t.ajax(e);
      }),
      (t.fn.load = function(e, n, i) {
        if (!this.length) return this;
        var a,
          r = this,
          s = e.split(/\s/),
          u = j(e, n, i),
          f = u.success;
        return (
          s.length > 1 && ((u.url = s[0]), (a = s[1])),
          (u.success = function(e) {
            r.html(
              a
                ? t('<div>')
                    .html(e.replace(o, ''))
                    .find(a)
                : e
            ),
              f && f.apply(r, arguments);
          }),
          t.ajax(u),
          this
        );
      });
    var S = encodeURIComponent;
    t.param = function(t, e) {
      var n = [];
      return (
        (n.add = function(t, e) {
          this.push(S(t) + '=' + S(e));
        }),
        T(n, t, e),
        n.join('&').replace(/%20/g, '+')
      );
    };
  })(Zepto),
  (function(t) {
    (t.fn.serializeArray = function() {
      var n,
        e = [];
      return (
        t([].slice.call(this.get(0).elements)).each(function() {
          n = t(this);
          var i = n.attr('type');
          'fieldset' != this.nodeName.toLowerCase() &&
            !this.disabled &&
            'submit' != i &&
            'reset' != i &&
            'button' != i &&
            (('radio' != i && 'checkbox' != i) || this.checked) &&
            e.push({ name: n.attr('name'), value: n.val() });
        }),
        e
      );
    }),
      (t.fn.serialize = function() {
        var t = [];
        return (
          this.serializeArray().forEach(function(e) {
            t.push(encodeURIComponent(e.name) + '=' + encodeURIComponent(e.value));
          }),
          t.join('&')
        );
      }),
      (t.fn.submit = function(e) {
        if (e) this.bind('submit', e);
        else if (this.length) {
          var n = t.Event('submit');
          this.eq(0).trigger(n), n.isDefaultPrevented() || this.get(0).submit();
        }
        return this;
      });
  })(Zepto),
  (function(t) {
    '__proto__' in {} ||
      t.extend(t.zepto, {
        Z: function(e, n) {
          return (e = e || []), t.extend(e, t.fn), (e.selector = n || ''), (e.__Z = !0), e;
        },
        isZ: function(e) {
          return 'array' === t.type(e) && '__Z' in e;
        },
      });
    try {
      getComputedStyle(void 0);
    } catch (e) {
      var n = getComputedStyle;
      window.getComputedStyle = function(t) {
        try {
          return n(t);
        } catch (e) {
          return null;
        }
      };
    }
  })(Zepto);

//     Underscore.js 1.7.0
//     http://underscorejs.org
//     (c) 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function() {
  var n = this,
    t = n._,
    r = Array.prototype,
    e = Object.prototype,
    u = Function.prototype,
    i = r.push,
    a = r.slice,
    o = r.concat,
    l = e.toString,
    c = e.hasOwnProperty,
    f = Array.isArray,
    s = Object.keys,
    p = u.bind,
    h = function(n) {
      return n instanceof h ? n : this instanceof h ? void (this._wrapped = n) : new h(n);
    };
  'undefined' != typeof exports
    ? ('undefined' != typeof module && module.exports && (exports = module.exports = h), (exports._ = h))
    : (n._ = h),
    (h.VERSION = '1.7.0');
  var g = function(n, t, r) {
    if (t === void 0) return n;
    switch (null == r ? 3 : r) {
      case 1:
        return function(r) {
          return n.call(t, r);
        };
      case 2:
        return function(r, e) {
          return n.call(t, r, e);
        };
      case 3:
        return function(r, e, u) {
          return n.call(t, r, e, u);
        };
      case 4:
        return function(r, e, u, i) {
          return n.call(t, r, e, u, i);
        };
    }
    return function() {
      return n.apply(t, arguments);
    };
  };
  (h.iteratee = function(n, t, r) {
    return null == n ? h.identity : h.isFunction(n) ? g(n, t, r) : h.isObject(n) ? h.matches(n) : h.property(n);
  }),
    (h.each = h.forEach = function(n, t, r) {
      if (null == n) return n;
      t = g(t, r);
      var e,
        u = n.length;
      if (u === +u) for (e = 0; u > e; e++) t(n[e], e, n);
      else {
        var i = h.keys(n);
        for (e = 0, u = i.length; u > e; e++) t(n[i[e]], i[e], n);
      }
      return n;
    }),
    (h.map = h.collect = function(n, t, r) {
      if (null == n) return [];
      t = h.iteratee(t, r);
      for (var e, u = n.length !== +n.length && h.keys(n), i = (u || n).length, a = Array(i), o = 0; i > o; o++)
        (e = u ? u[o] : o), (a[o] = t(n[e], e, n));
      return a;
    });
  var v = 'Reduce of empty array with no initial value';
  (h.reduce = h.foldl = h.inject = function(n, t, r, e) {
    null == n && (n = []), (t = g(t, e, 4));
    var u,
      i = n.length !== +n.length && h.keys(n),
      a = (i || n).length,
      o = 0;
    if (arguments.length < 3) {
      if (!a) throw new TypeError(v);
      r = n[i ? i[o++] : o++];
    }
    for (; a > o; o++) (u = i ? i[o] : o), (r = t(r, n[u], u, n));
    return r;
  }),
    (h.reduceRight = h.foldr = function(n, t, r, e) {
      null == n && (n = []), (t = g(t, e, 4));
      var u,
        i = n.length !== +n.length && h.keys(n),
        a = (i || n).length;
      if (arguments.length < 3) {
        if (!a) throw new TypeError(v);
        r = n[i ? i[--a] : --a];
      }
      for (; a--; ) (u = i ? i[a] : a), (r = t(r, n[u], u, n));
      return r;
    }),
    (h.find = h.detect = function(n, t, r) {
      var e;
      return (
        (t = h.iteratee(t, r)),
        h.some(n, function(n, r, u) {
          return t(n, r, u) ? ((e = n), !0) : void 0;
        }),
        e
      );
    }),
    (h.filter = h.select = function(n, t, r) {
      var e = [];
      return null == n
        ? e
        : ((t = h.iteratee(t, r)),
          h.each(n, function(n, r, u) {
            t(n, r, u) && e.push(n);
          }),
          e);
    }),
    (h.reject = function(n, t, r) {
      return h.filter(n, h.negate(h.iteratee(t)), r);
    }),
    (h.every = h.all = function(n, t, r) {
      if (null == n) return !0;
      t = h.iteratee(t, r);
      var e,
        u,
        i = n.length !== +n.length && h.keys(n),
        a = (i || n).length;
      for (e = 0; a > e; e++) if (((u = i ? i[e] : e), !t(n[u], u, n))) return !1;
      return !0;
    }),
    (h.some = h.any = function(n, t, r) {
      if (null == n) return !1;
      t = h.iteratee(t, r);
      var e,
        u,
        i = n.length !== +n.length && h.keys(n),
        a = (i || n).length;
      for (e = 0; a > e; e++) if (((u = i ? i[e] : e), t(n[u], u, n))) return !0;
      return !1;
    }),
    (h.contains = h.include = function(n, t) {
      return null == n ? !1 : (n.length !== +n.length && (n = h.values(n)), h.indexOf(n, t) >= 0);
    }),
    (h.invoke = function(n, t) {
      var r = a.call(arguments, 2),
        e = h.isFunction(t);
      return h.map(n, function(n) {
        return (e ? t : n[t]).apply(n, r);
      });
    }),
    (h.pluck = function(n, t) {
      return h.map(n, h.property(t));
    }),
    (h.where = function(n, t) {
      return h.filter(n, h.matches(t));
    }),
    (h.findWhere = function(n, t) {
      return h.find(n, h.matches(t));
    }),
    (h.max = function(n, t, r) {
      var e,
        u,
        i = -1 / 0,
        a = -1 / 0;
      if (null == t && null != n) {
        n = n.length === +n.length ? n : h.values(n);
        for (var o = 0, l = n.length; l > o; o++) (e = n[o]), e > i && (i = e);
      } else
        (t = h.iteratee(t, r)),
          h.each(n, function(n, r, e) {
            (u = t(n, r, e)), (u > a || (u === -1 / 0 && i === -1 / 0)) && ((i = n), (a = u));
          });
      return i;
    }),
    (h.min = function(n, t, r) {
      var e,
        u,
        i = 1 / 0,
        a = 1 / 0;
      if (null == t && null != n) {
        n = n.length === +n.length ? n : h.values(n);
        for (var o = 0, l = n.length; l > o; o++) (e = n[o]), i > e && (i = e);
      } else
        (t = h.iteratee(t, r)),
          h.each(n, function(n, r, e) {
            (u = t(n, r, e)), (a > u || (1 / 0 === u && 1 / 0 === i)) && ((i = n), (a = u));
          });
      return i;
    }),
    (h.shuffle = function(n) {
      for (var t, r = n && n.length === +n.length ? n : h.values(n), e = r.length, u = Array(e), i = 0; e > i; i++)
        (t = h.random(0, i)), t !== i && (u[i] = u[t]), (u[t] = r[i]);
      return u;
    }),
    (h.sample = function(n, t, r) {
      return null == t || r
        ? (n.length !== +n.length && (n = h.values(n)), n[h.random(n.length - 1)])
        : h.shuffle(n).slice(0, Math.max(0, t));
    }),
    (h.sortBy = function(n, t, r) {
      return (
        (t = h.iteratee(t, r)),
        h.pluck(
          h
            .map(n, function(n, r, e) {
              return { value: n, index: r, criteria: t(n, r, e) };
            })
            .sort(function(n, t) {
              var r = n.criteria,
                e = t.criteria;
              if (r !== e) {
                if (r > e || r === void 0) return 1;
                if (e > r || e === void 0) return -1;
              }
              return n.index - t.index;
            }),
          'value'
        )
      );
    });
  var m = function(n) {
    return function(t, r, e) {
      var u = {};
      return (
        (r = h.iteratee(r, e)),
        h.each(t, function(e, i) {
          var a = r(e, i, t);
          n(u, e, a);
        }),
        u
      );
    };
  };
  (h.groupBy = m(function(n, t, r) {
    h.has(n, r) ? n[r].push(t) : (n[r] = [t]);
  })),
    (h.indexBy = m(function(n, t, r) {
      n[r] = t;
    })),
    (h.countBy = m(function(n, t, r) {
      h.has(n, r) ? n[r]++ : (n[r] = 1);
    })),
    (h.sortedIndex = function(n, t, r, e) {
      r = h.iteratee(r, e, 1);
      for (var u = r(t), i = 0, a = n.length; a > i; ) {
        var o = (i + a) >>> 1;
        r(n[o]) < u ? (i = o + 1) : (a = o);
      }
      return i;
    }),
    (h.toArray = function(n) {
      return n ? (h.isArray(n) ? a.call(n) : n.length === +n.length ? h.map(n, h.identity) : h.values(n)) : [];
    }),
    (h.size = function(n) {
      return null == n ? 0 : n.length === +n.length ? n.length : h.keys(n).length;
    }),
    (h.partition = function(n, t, r) {
      t = h.iteratee(t, r);
      var e = [],
        u = [];
      return (
        h.each(n, function(n, r, i) {
          (t(n, r, i) ? e : u).push(n);
        }),
        [e, u]
      );
    }),
    (h.first = h.head = h.take = function(n, t, r) {
      return null == n ? void 0 : null == t || r ? n[0] : 0 > t ? [] : a.call(n, 0, t);
    }),
    (h.initial = function(n, t, r) {
      return a.call(n, 0, Math.max(0, n.length - (null == t || r ? 1 : t)));
    }),
    (h.last = function(n, t, r) {
      return null == n ? void 0 : null == t || r ? n[n.length - 1] : a.call(n, Math.max(n.length - t, 0));
    }),
    (h.rest = h.tail = h.drop = function(n, t, r) {
      return a.call(n, null == t || r ? 1 : t);
    }),
    (h.compact = function(n) {
      return h.filter(n, h.identity);
    });
  var y = function(n, t, r, e) {
    if (t && h.every(n, h.isArray)) return o.apply(e, n);
    for (var u = 0, a = n.length; a > u; u++) {
      var l = n[u];
      h.isArray(l) || h.isArguments(l) ? (t ? i.apply(e, l) : y(l, t, r, e)) : r || e.push(l);
    }
    return e;
  };
  (h.flatten = function(n, t) {
    return y(n, t, !1, []);
  }),
    (h.without = function(n) {
      return h.difference(n, a.call(arguments, 1));
    }),
    (h.uniq = h.unique = function(n, t, r, e) {
      if (null == n) return [];
      h.isBoolean(t) || ((e = r), (r = t), (t = !1)), null != r && (r = h.iteratee(r, e));
      for (var u = [], i = [], a = 0, o = n.length; o > a; a++) {
        var l = n[a];
        if (t) (a && i === l) || u.push(l), (i = l);
        else if (r) {
          var c = r(l, a, n);
          h.indexOf(i, c) < 0 && (i.push(c), u.push(l));
        } else h.indexOf(u, l) < 0 && u.push(l);
      }
      return u;
    }),
    (h.union = function() {
      return h.uniq(y(arguments, !0, !0, []));
    }),
    (h.intersection = function(n) {
      if (null == n) return [];
      for (var t = [], r = arguments.length, e = 0, u = n.length; u > e; e++) {
        var i = n[e];
        if (!h.contains(t, i)) {
          for (var a = 1; r > a && h.contains(arguments[a], i); a++);
          a === r && t.push(i);
        }
      }
      return t;
    }),
    (h.difference = function(n) {
      var t = y(a.call(arguments, 1), !0, !0, []);
      return h.filter(n, function(n) {
        return !h.contains(t, n);
      });
    }),
    (h.zip = function(n) {
      if (null == n) return [];
      for (var t = h.max(arguments, 'length').length, r = Array(t), e = 0; t > e; e++) r[e] = h.pluck(arguments, e);
      return r;
    }),
    (h.object = function(n, t) {
      if (null == n) return {};
      for (var r = {}, e = 0, u = n.length; u > e; e++) t ? (r[n[e]] = t[e]) : (r[n[e][0]] = n[e][1]);
      return r;
    }),
    (h.indexOf = function(n, t, r) {
      if (null == n) return -1;
      var e = 0,
        u = n.length;
      if (r) {
        if ('number' != typeof r) return (e = h.sortedIndex(n, t)), n[e] === t ? e : -1;
        e = 0 > r ? Math.max(0, u + r) : r;
      }
      for (; u > e; e++) if (n[e] === t) return e;
      return -1;
    }),
    (h.lastIndexOf = function(n, t, r) {
      if (null == n) return -1;
      var e = n.length;
      for ('number' == typeof r && (e = 0 > r ? e + r + 1 : Math.min(e, r + 1)); --e >= 0; ) if (n[e] === t) return e;
      return -1;
    }),
    (h.range = function(n, t, r) {
      arguments.length <= 1 && ((t = n || 0), (n = 0)), (r = r || 1);
      for (var e = Math.max(Math.ceil((t - n) / r), 0), u = Array(e), i = 0; e > i; i++, n += r) u[i] = n;
      return u;
    });
  var d = function() {};
  (h.bind = function(n, t) {
    var r, e;
    if (p && n.bind === p) return p.apply(n, a.call(arguments, 1));
    if (!h.isFunction(n)) throw new TypeError('Bind must be called on a function');
    return (
      (r = a.call(arguments, 2)),
      (e = function() {
        if (!(this instanceof e)) return n.apply(t, r.concat(a.call(arguments)));
        d.prototype = n.prototype;
        var u = new d();
        d.prototype = null;
        var i = n.apply(u, r.concat(a.call(arguments)));
        return h.isObject(i) ? i : u;
      })
    );
  }),
    (h.partial = function(n) {
      var t = a.call(arguments, 1);
      return function() {
        for (var r = 0, e = t.slice(), u = 0, i = e.length; i > u; u++) e[u] === h && (e[u] = arguments[r++]);
        for (; r < arguments.length; ) e.push(arguments[r++]);
        return n.apply(this, e);
      };
    }),
    (h.bindAll = function(n) {
      var t,
        r,
        e = arguments.length;
      if (1 >= e) throw new Error('bindAll must be passed function names');
      for (t = 1; e > t; t++) (r = arguments[t]), (n[r] = h.bind(n[r], n));
      return n;
    }),
    (h.memoize = function(n, t) {
      var r = function(e) {
        var u = r.cache,
          i = t ? t.apply(this, arguments) : e;
        return h.has(u, i) || (u[i] = n.apply(this, arguments)), u[i];
      };
      return (r.cache = {}), r;
    }),
    (h.delay = function(n, t) {
      var r = a.call(arguments, 2);
      return setTimeout(function() {
        return n.apply(null, r);
      }, t);
    }),
    (h.defer = function(n) {
      return h.delay.apply(h, [n, 1].concat(a.call(arguments, 1)));
    }),
    (h.throttle = function(n, t, r) {
      var e,
        u,
        i,
        a = null,
        o = 0;
      r || (r = {});
      var l = function() {
        (o = r.leading === !1 ? 0 : h.now()), (a = null), (i = n.apply(e, u)), a || (e = u = null);
      };
      return function() {
        var c = h.now();
        o || r.leading !== !1 || (o = c);
        var f = t - (c - o);
        return (
          (e = this),
          (u = arguments),
          0 >= f || f > t
            ? (clearTimeout(a), (a = null), (o = c), (i = n.apply(e, u)), a || (e = u = null))
            : a || r.trailing === !1 || (a = setTimeout(l, f)),
          i
        );
      };
    }),
    (h.debounce = function(n, t, r) {
      var e,
        u,
        i,
        a,
        o,
        l = function() {
          var c = h.now() - a;
          t > c && c > 0 ? (e = setTimeout(l, t - c)) : ((e = null), r || ((o = n.apply(i, u)), e || (i = u = null)));
        };
      return function() {
        (i = this), (u = arguments), (a = h.now());
        var c = r && !e;
        return e || (e = setTimeout(l, t)), c && ((o = n.apply(i, u)), (i = u = null)), o;
      };
    }),
    (h.wrap = function(n, t) {
      return h.partial(t, n);
    }),
    (h.negate = function(n) {
      return function() {
        return !n.apply(this, arguments);
      };
    }),
    (h.compose = function() {
      var n = arguments,
        t = n.length - 1;
      return function() {
        for (var r = t, e = n[t].apply(this, arguments); r--; ) e = n[r].call(this, e);
        return e;
      };
    }),
    (h.after = function(n, t) {
      return function() {
        return --n < 1 ? t.apply(this, arguments) : void 0;
      };
    }),
    (h.before = function(n, t) {
      var r;
      return function() {
        return --n > 0 ? (r = t.apply(this, arguments)) : (t = null), r;
      };
    }),
    (h.once = h.partial(h.before, 2)),
    (h.keys = function(n) {
      if (!h.isObject(n)) return [];
      if (s) return s(n);
      var t = [];
      for (var r in n) h.has(n, r) && t.push(r);
      return t;
    }),
    (h.values = function(n) {
      for (var t = h.keys(n), r = t.length, e = Array(r), u = 0; r > u; u++) e[u] = n[t[u]];
      return e;
    }),
    (h.pairs = function(n) {
      for (var t = h.keys(n), r = t.length, e = Array(r), u = 0; r > u; u++) e[u] = [t[u], n[t[u]]];
      return e;
    }),
    (h.invert = function(n) {
      for (var t = {}, r = h.keys(n), e = 0, u = r.length; u > e; e++) t[n[r[e]]] = r[e];
      return t;
    }),
    (h.functions = h.methods = function(n) {
      var t = [];
      for (var r in n) h.isFunction(n[r]) && t.push(r);
      return t.sort();
    }),
    (h.extend = function(n) {
      if (!h.isObject(n)) return n;
      for (var t, r, e = 1, u = arguments.length; u > e; e++) {
        t = arguments[e];
        for (r in t) c.call(t, r) && (n[r] = t[r]);
      }
      return n;
    }),
    (h.pick = function(n, t, r) {
      var e,
        u = {};
      if (null == n) return u;
      if (h.isFunction(t)) {
        t = g(t, r);
        for (e in n) {
          var i = n[e];
          t(i, e, n) && (u[e] = i);
        }
      } else {
        var l = o.apply([], a.call(arguments, 1));
        n = new Object(n);
        for (var c = 0, f = l.length; f > c; c++) (e = l[c]), e in n && (u[e] = n[e]);
      }
      return u;
    }),
    (h.omit = function(n, t, r) {
      if (h.isFunction(t)) t = h.negate(t);
      else {
        var e = h.map(o.apply([], a.call(arguments, 1)), String);
        t = function(n, t) {
          return !h.contains(e, t);
        };
      }
      return h.pick(n, t, r);
    }),
    (h.defaults = function(n) {
      if (!h.isObject(n)) return n;
      for (var t = 1, r = arguments.length; r > t; t++) {
        var e = arguments[t];
        for (var u in e) n[u] === void 0 && (n[u] = e[u]);
      }
      return n;
    }),
    (h.clone = function(n) {
      return h.isObject(n) ? (h.isArray(n) ? n.slice() : h.extend({}, n)) : n;
    }),
    (h.tap = function(n, t) {
      return t(n), n;
    });
  var b = function(n, t, r, e) {
    if (n === t) return 0 !== n || 1 / n === 1 / t;
    if (null == n || null == t) return n === t;
    n instanceof h && (n = n._wrapped), t instanceof h && (t = t._wrapped);
    var u = l.call(n);
    if (u !== l.call(t)) return !1;
    switch (u) {
      case '[object RegExp]':
      case '[object String]':
        return '' + n == '' + t;
      case '[object Number]':
        return +n !== +n ? +t !== +t : 0 === +n ? 1 / +n === 1 / t : +n === +t;
      case '[object Date]':
      case '[object Boolean]':
        return +n === +t;
    }
    if ('object' != typeof n || 'object' != typeof t) return !1;
    for (var i = r.length; i--; ) if (r[i] === n) return e[i] === t;
    var a = n.constructor,
      o = t.constructor;
    if (
      a !== o &&
      'constructor' in n &&
      'constructor' in t &&
      !(h.isFunction(a) && a instanceof a && h.isFunction(o) && o instanceof o)
    )
      return !1;
    r.push(n), e.push(t);
    var c, f;
    if ('[object Array]' === u) {
      if (((c = n.length), (f = c === t.length))) for (; c-- && (f = b(n[c], t[c], r, e)); );
    } else {
      var s,
        p = h.keys(n);
      if (((c = p.length), (f = h.keys(t).length === c)))
        for (; c-- && ((s = p[c]), (f = h.has(t, s) && b(n[s], t[s], r, e))); );
    }
    return r.pop(), e.pop(), f;
  };
  (h.isEqual = function(n, t) {
    return b(n, t, [], []);
  }),
    (h.isEmpty = function(n) {
      if (null == n) return !0;
      if (h.isArray(n) || h.isString(n) || h.isArguments(n)) return 0 === n.length;
      for (var t in n) if (h.has(n, t)) return !1;
      return !0;
    }),
    (h.isElement = function(n) {
      return !(!n || 1 !== n.nodeType);
    }),
    (h.isArray =
      f ||
      function(n) {
        return '[object Array]' === l.call(n);
      }),
    (h.isObject = function(n) {
      var t = typeof n;
      return 'function' === t || ('object' === t && !!n);
    }),
    h.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp'], function(n) {
      h['is' + n] = function(t) {
        return l.call(t) === '[object ' + n + ']';
      };
    }),
    h.isArguments(arguments) ||
      (h.isArguments = function(n) {
        return h.has(n, 'callee');
      }),
    'function' != typeof /./ &&
      (h.isFunction = function(n) {
        return 'function' == typeof n || !1;
      }),
    (h.isFinite = function(n) {
      return isFinite(n) && !isNaN(parseFloat(n));
    }),
    (h.isNaN = function(n) {
      return h.isNumber(n) && n !== +n;
    }),
    (h.isBoolean = function(n) {
      return n === !0 || n === !1 || '[object Boolean]' === l.call(n);
    }),
    (h.isNull = function(n) {
      return null === n;
    }),
    (h.isUndefined = function(n) {
      return n === void 0;
    }),
    (h.has = function(n, t) {
      return null != n && c.call(n, t);
    }),
    (h.noConflict = function() {
      return (n._ = t), this;
    }),
    (h.identity = function(n) {
      return n;
    }),
    (h.constant = function(n) {
      return function() {
        return n;
      };
    }),
    (h.noop = function() {}),
    (h.property = function(n) {
      return function(t) {
        return t[n];
      };
    }),
    (h.matches = function(n) {
      var t = h.pairs(n),
        r = t.length;
      return function(n) {
        if (null == n) return !r;
        n = new Object(n);
        for (var e = 0; r > e; e++) {
          var u = t[e],
            i = u[0];
          if (u[1] !== n[i] || !(i in n)) return !1;
        }
        return !0;
      };
    }),
    (h.times = function(n, t, r) {
      var e = Array(Math.max(0, n));
      t = g(t, r, 1);
      for (var u = 0; n > u; u++) e[u] = t(u);
      return e;
    }),
    (h.random = function(n, t) {
      return null == t && ((t = n), (n = 0)), n + Math.floor(Math.random() * (t - n + 1));
    }),
    (h.now =
      Date.now ||
      function() {
        return new Date().getTime();
      });
  var _ = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#x27;', '`': '&#x60;' },
    w = h.invert(_),
    j = function(n) {
      var t = function(t) {
          return n[t];
        },
        r = '(?:' + h.keys(n).join('|') + ')',
        e = RegExp(r),
        u = RegExp(r, 'g');
      return function(n) {
        return (n = null == n ? '' : '' + n), e.test(n) ? n.replace(u, t) : n;
      };
    };
  (h.escape = j(_)),
    (h.unescape = j(w)),
    (h.result = function(n, t) {
      if (null == n) return void 0;
      var r = n[t];
      return h.isFunction(r) ? n[t]() : r;
    });
  var x = 0;
  (h.uniqueId = function(n) {
    var t = ++x + '';
    return n ? n + t : t;
  }),
    (h.templateSettings = { evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g });
  var A = /(.)^/,
    k = { "'": "'", '\\': '\\', '\r': 'r', '\n': 'n', '\u2028': 'u2028', '\u2029': 'u2029' },
    O = /\\|'|\r|\n|\u2028|\u2029/g,
    F = function(n) {
      return '\\' + k[n];
    };
  (h.template = function(n, t, r) {
    !t && r && (t = r), (t = h.defaults({}, t, h.templateSettings));
    var e = RegExp(
        [(t.escape || A).source, (t.interpolate || A).source, (t.evaluate || A).source].join('|') + '|$',
        'g'
      ),
      u = 0,
      i = "__p+='";
    n.replace(e, function(t, r, e, a, o) {
      return (
        (i += n.slice(u, o).replace(O, F)),
        (u = o + t.length),
        r
          ? (i += "'+\n((__t=(" + r + "))==null?'':_.escape(__t))+\n'")
          : e
          ? (i += "'+\n((__t=(" + e + "))==null?'':__t)+\n'")
          : a && (i += "';\n" + a + "\n__p+='"),
        t
      );
    }),
      (i += "';\n"),
      t.variable || (i = 'with(obj||{}){\n' + i + '}\n'),
      (i =
        "var __t,__p='',__j=Array.prototype.join," +
        "print=function(){__p+=__j.call(arguments,'');};\n" +
        i +
        'return __p;\n');
    try {
      var a = new Function(t.variable || 'obj', '_', i);
    } catch (o) {
      throw ((o.source = i), o);
    }
    var l = function(n) {
        return a.call(this, n, h);
      },
      c = t.variable || 'obj';
    return (l.source = 'function(' + c + '){\n' + i + '}'), l;
  }),
    (h.chain = function(n) {
      var t = h(n);
      return (t._chain = !0), t;
    });
  var E = function(n) {
    return this._chain ? h(n).chain() : n;
  };
  (h.mixin = function(n) {
    h.each(h.functions(n), function(t) {
      var r = (h[t] = n[t]);
      h.prototype[t] = function() {
        var n = [this._wrapped];
        return i.apply(n, arguments), E.call(this, r.apply(h, n));
      };
    });
  }),
    h.mixin(h),
    h.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(n) {
      var t = r[n];
      h.prototype[n] = function() {
        var r = this._wrapped;
        return (
          t.apply(r, arguments), ('shift' !== n && 'splice' !== n) || 0 !== r.length || delete r[0], E.call(this, r)
        );
      };
    }),
    h.each(['concat', 'join', 'slice'], function(n) {
      var t = r[n];
      h.prototype[n] = function() {
        return E.call(this, t.apply(this._wrapped, arguments));
      };
    }),
    (h.prototype.value = function() {
      return this._wrapped;
    }),
    'function' == typeof define &&
      define.amd &&
      define('underscore', [], function() {
        return h;
      });
}.call(this));

// Backbone.js 0.9.2

// (c) 2010-2012 Jeremy Ashkenas, DocumentCloud Inc.
// Backbone may be freely distributed under the MIT license.
// For all details and documentation:
// http://backbonejs.org
(function() {
  var l = this,
    y = l.Backbone,
    z = Array.prototype.slice,
    A = Array.prototype.splice,
    g;
  g = 'undefined' !== typeof exports ? exports : (l.Backbone = {});
  g.VERSION = '0.9.2';
  var f = l._;
  !f && 'undefined' !== typeof require && (f = require('underscore'));
  var i = l.jQuery || l.Zepto || l.ender;
  g.setDomLibrary = function(a) {
    i = a;
  };
  g.noConflict = function() {
    l.Backbone = y;
    return this;
  };
  g.emulateHTTP = !1;
  g.emulateJSON = !1;
  var p = /\s+/,
    k = (g.Events = {
      on: function(a, b, c) {
        var d, e, f, g, j;
        if (!b) return this;
        a = a.split(p);
        for (d = this._callbacks || (this._callbacks = {}); (e = a.shift()); )
          (f = (j = d[e]) ? j.tail : {}),
            (f.next = g = {}),
            (f.context = c),
            (f.callback = b),
            (d[e] = { tail: g, next: j ? j.next : f });
        return this;
      },
      off: function(a, b, c) {
        var d, e, h, g, j, q;
        if ((e = this._callbacks)) {
          if (!a && !b && !c) return delete this._callbacks, this;
          for (a = a ? a.split(p) : f.keys(e); (d = a.shift()); )
            if (((h = e[d]), delete e[d], h && (b || c)))
              for (g = h.tail; (h = h.next) !== g; )
                if (((j = h.callback), (q = h.context), (b && j !== b) || (c && q !== c))) this.on(d, j, q);
          return this;
        }
      },
      trigger: function(a) {
        var b, c, d, e, f, g;
        if (!(d = this._callbacks)) return this;
        f = d.all;
        a = a.split(p);
        for (g = z.call(arguments, 1); (b = a.shift()); ) {
          if ((c = d[b])) for (e = c.tail; (c = c.next) !== e; ) c.callback.apply(c.context || this, g);
          if ((c = f)) {
            e = c.tail;
            for (b = [b].concat(g); (c = c.next) !== e; ) c.callback.apply(c.context || this, b);
          }
        }
        return this;
      },
    });
  k.bind = k.on;
  k.unbind = k.off;
  var o = (g.Model = function(a, b) {
    var c;
    a || (a = {});
    b && b.parse && (a = this.parse(a));
    if ((c = n(this, 'defaults'))) a = f.extend({}, c, a);
    b && b.collection && (this.collection = b.collection);
    this.attributes = {};
    this._escapedAttributes = {};
    this.cid = f.uniqueId('c');
    this.changed = {};
    this._silent = {};
    this._pending = {};
    this.set(a, { silent: !0 });
    this.changed = {};
    this._silent = {};
    this._pending = {};
    this._previousAttributes = f.clone(this.attributes);
    this.initialize.apply(this, arguments);
  });
  f.extend(o.prototype, k, {
    changed: null,
    _silent: null,
    _pending: null,
    idAttribute: 'id',
    initialize: function() {},
    toJSON: function() {
      return f.clone(this.attributes);
    },
    get: function(a) {
      return this.attributes[a];
    },
    escape: function(a) {
      var b;
      if ((b = this._escapedAttributes[a])) return b;
      b = this.get(a);
      return (this._escapedAttributes[a] = f.escape(null == b ? '' : '' + b));
    },
    has: function(a) {
      return null != this.get(a);
    },
    set: function(a, b, c) {
      var d, e;
      f.isObject(a) || null == a ? ((d = a), (c = b)) : ((d = {}), (d[a] = b));
      c || (c = {});
      if (!d) return this;
      d instanceof o && (d = d.attributes);
      if (c.unset) for (e in d) d[e] = void 0;
      if (!this._validate(d, c)) return !1;
      this.idAttribute in d && (this.id = d[this.idAttribute]);
      var b = (c.changes = {}),
        h = this.attributes,
        g = this._escapedAttributes,
        j = this._previousAttributes || {};
      for (e in d) {
        a = d[e];
        if (!f.isEqual(h[e], a) || (c.unset && f.has(h, e))) delete g[e], ((c.silent ? this._silent : b)[e] = !0);
        c.unset ? delete h[e] : (h[e] = a);
        !f.isEqual(j[e], a) || f.has(h, e) != f.has(j, e)
          ? ((this.changed[e] = a), c.silent || (this._pending[e] = !0))
          : (delete this.changed[e], delete this._pending[e]);
      }
      c.silent || this.change(c);
      return this;
    },
    unset: function(a, b) {
      (b || (b = {})).unset = !0;
      return this.set(a, null, b);
    },
    clear: function(a) {
      (a || (a = {})).unset = !0;
      return this.set(f.clone(this.attributes), a);
    },
    fetch: function(a) {
      var a = a ? f.clone(a) : {},
        b = this,
        c = a.success;
      a.success = function(d, e, f) {
        if (!b.set(b.parse(d, f), a)) return !1;
        c && c(b, d);
      };
      a.error = g.wrapError(a.error, b, a);
      return (this.sync || g.sync).call(this, 'read', this, a);
    },
    save: function(a, b, c) {
      var d, e;
      f.isObject(a) || null == a ? ((d = a), (c = b)) : ((d = {}), (d[a] = b));
      c = c ? f.clone(c) : {};
      if (c.wait) {
        if (!this._validate(d, c)) return !1;
        e = f.clone(this.attributes);
      }
      a = f.extend({}, c, { silent: !0 });
      if (d && !this.set(d, c.wait ? a : c)) return !1;
      var h = this,
        i = c.success;
      c.success = function(a, b, e) {
        b = h.parse(a, e);
        if (c.wait) {
          delete c.wait;
          b = f.extend(d || {}, b);
        }
        if (!h.set(b, c)) return false;
        i ? i(h, a) : h.trigger('sync', h, a, c);
      };
      c.error = g.wrapError(c.error, h, c);
      b = this.isNew() ? 'create' : 'update';
      b = (this.sync || g.sync).call(this, b, this, c);
      c.wait && this.set(e, a);
      return b;
    },
    destroy: function(a) {
      var a = a ? f.clone(a) : {},
        b = this,
        c = a.success,
        d = function() {
          b.trigger('destroy', b, b.collection, a);
        };
      if (this.isNew()) return d(), !1;
      a.success = function(e) {
        a.wait && d();
        c ? c(b, e) : b.trigger('sync', b, e, a);
      };
      a.error = g.wrapError(a.error, b, a);
      var e = (this.sync || g.sync).call(this, 'delete', this, a);
      a.wait || d();
      return e;
    },
    url: function() {
      var a = n(this, 'urlRoot') || n(this.collection, 'url') || t();
      return this.isNew() ? a : a + ('/' == a.charAt(a.length - 1) ? '' : '/') + encodeURIComponent(this.id);
    },
    parse: function(a) {
      return a;
    },
    clone: function() {
      return new this.constructor(this.attributes);
    },
    isNew: function() {
      return null == this.id;
    },
    change: function(a) {
      a || (a = {});
      var b = this._changing;
      this._changing = !0;
      for (var c in this._silent) this._pending[c] = !0;
      var d = f.extend({}, a.changes, this._silent);
      this._silent = {};
      for (c in d) this.trigger('change:' + c, this, this.get(c), a);
      if (b) return this;
      for (; !f.isEmpty(this._pending); ) {
        this._pending = {};
        this.trigger('change', this, a);
        for (c in this.changed) !this._pending[c] && !this._silent[c] && delete this.changed[c];
        this._previousAttributes = f.clone(this.attributes);
      }
      this._changing = !1;
      return this;
    },
    hasChanged: function(a) {
      return !arguments.length ? !f.isEmpty(this.changed) : f.has(this.changed, a);
    },
    changedAttributes: function(a) {
      if (!a) return this.hasChanged() ? f.clone(this.changed) : !1;
      var b,
        c = !1,
        d = this._previousAttributes,
        e;
      for (e in a) if (!f.isEqual(d[e], (b = a[e]))) (c || (c = {}))[e] = b;
      return c;
    },
    previous: function(a) {
      return !arguments.length || !this._previousAttributes ? null : this._previousAttributes[a];
    },
    previousAttributes: function() {
      return f.clone(this._previousAttributes);
    },
    isValid: function() {
      return !this.validate(this.attributes);
    },
    _validate: function(a, b) {
      if (b.silent || !this.validate) return !0;
      var a = f.extend({}, this.attributes, a),
        c = this.validate(a, b);
      if (!c) return !0;
      b && b.error ? b.error(this, c, b) : this.trigger('error', this, c, b);
      return !1;
    },
  });
  var r = (g.Collection = function(a, b) {
    b || (b = {});
    b.model && (this.model = b.model);
    b.comparator && (this.comparator = b.comparator);
    this._reset();
    this.initialize.apply(this, arguments);
    a && this.reset(a, { silent: !0, parse: b.parse });
  });
  f.extend(r.prototype, k, {
    model: o,
    initialize: function() {},
    toJSON: function(a) {
      return this.map(function(b) {
        return b.toJSON(a);
      });
    },
    add: function(a, b) {
      var c,
        d,
        e,
        g,
        i,
        j = {},
        k = {},
        l = [];
      b || (b = {});
      a = f.isArray(a) ? a.slice() : [a];
      c = 0;
      for (d = a.length; c < d; c++) {
        if (!(e = a[c] = this._prepareModel(a[c], b))) throw Error("Can't add an invalid model to a collection");
        g = e.cid;
        i = e.id;
        j[g] || this._byCid[g] || (null != i && (k[i] || this._byId[i])) ? l.push(c) : (j[g] = k[i] = e);
      }
      for (c = l.length; c--; ) a.splice(l[c], 1);
      c = 0;
      for (d = a.length; c < d; c++)
        (e = a[c]).on('all', this._onModelEvent, this),
          (this._byCid[e.cid] = e),
          null != e.id && (this._byId[e.id] = e);
      this.length += d;
      A.apply(this.models, [null != b.at ? b.at : this.models.length, 0].concat(a));
      this.comparator && this.sort({ silent: !0 });
      if (b.silent) return this;
      c = 0;
      for (d = this.models.length; c < d; c++)
        if (j[(e = this.models[c]).cid]) (b.index = c), e.trigger('add', e, this, b);
      return this;
    },
    remove: function(a, b) {
      var c, d, e, g;
      b || (b = {});
      a = f.isArray(a) ? a.slice() : [a];
      c = 0;
      for (d = a.length; c < d; c++)
        if ((g = this.getByCid(a[c]) || this.get(a[c])))
          delete this._byId[g.id],
            delete this._byCid[g.cid],
            (e = this.indexOf(g)),
            this.models.splice(e, 1),
            this.length--,
            b.silent || ((b.index = e), g.trigger('remove', g, this, b)),
            this._removeReference(g);
      return this;
    },
    push: function(a, b) {
      a = this._prepareModel(a, b);
      this.add(a, b);
      return a;
    },
    pop: function(a) {
      var b = this.at(this.length - 1);
      this.remove(b, a);
      return b;
    },
    unshift: function(a, b) {
      a = this._prepareModel(a, b);
      this.add(a, f.extend({ at: 0 }, b));
      return a;
    },
    shift: function(a) {
      var b = this.at(0);
      this.remove(b, a);
      return b;
    },
    get: function(a) {
      return null == a ? void 0 : this._byId[null != a.id ? a.id : a];
    },
    getByCid: function(a) {
      return a && this._byCid[a.cid || a];
    },
    at: function(a) {
      return this.models[a];
    },
    where: function(a) {
      return f.isEmpty(a)
        ? []
        : this.filter(function(b) {
            for (var c in a) if (a[c] !== b.get(c)) return !1;
            return !0;
          });
    },
    sort: function(a) {
      a || (a = {});
      if (!this.comparator) throw Error('Cannot sort a set without a comparator');
      var b = f.bind(this.comparator, this);
      1 == this.comparator.length ? (this.models = this.sortBy(b)) : this.models.sort(b);
      a.silent || this.trigger('reset', this, a);
      return this;
    },
    pluck: function(a) {
      return f.map(this.models, function(b) {
        return b.get(a);
      });
    },
    reset: function(a, b) {
      a || (a = []);
      b || (b = {});
      for (var c = 0, d = this.models.length; c < d; c++) this._removeReference(this.models[c]);
      this._reset();
      this.add(a, f.extend({ silent: !0 }, b));
      b.silent || this.trigger('reset', this, b);
      return this;
    },
    fetch: function(a) {
      a = a ? f.clone(a) : {};
      void 0 === a.parse && (a.parse = !0);
      var b = this,
        c = a.success;
      a.success = function(d, e, f) {
        b[a.add ? 'add' : 'reset'](b.parse(d, f), a);
        c && c(b, d);
      };
      a.error = g.wrapError(a.error, b, a);
      return (this.sync || g.sync).call(this, 'read', this, a);
    },
    create: function(a, b) {
      var c = this,
        b = b ? f.clone(b) : {},
        a = this._prepareModel(a, b);
      if (!a) return !1;
      b.wait || c.add(a, b);
      var d = b.success;
      b.success = function(e, f) {
        b.wait && c.add(e, b);
        d ? d(e, f) : e.trigger('sync', a, f, b);
      };
      a.save(null, b);
      return a;
    },
    parse: function(a) {
      return a;
    },
    chain: function() {
      return f(this.models).chain();
    },
    _reset: function() {
      this.length = 0;
      this.models = [];
      this._byId = {};
      this._byCid = {};
    },
    _prepareModel: function(a, b) {
      b || (b = {});
      a instanceof o
        ? a.collection || (a.collection = this)
        : ((b.collection = this), (a = new this.model(a, b)), a._validate(a.attributes, b) || (a = !1));
      return a;
    },
    _removeReference: function(a) {
      this == a.collection && delete a.collection;
      a.off('all', this._onModelEvent, this);
    },
    _onModelEvent: function(a, b, c, d) {
      (('add' == a || 'remove' == a) && c != this) ||
        ('destroy' == a && this.remove(b, d),
        b && a === 'change:' + b.idAttribute && (delete this._byId[b.previous(b.idAttribute)], (this._byId[b.id] = b)),
        this.trigger.apply(this, arguments));
    },
  });
  f.each(
    'forEach,each,map,reduce,reduceRight,find,detect,filter,select,reject,every,all,some,any,include,contains,invoke,max,min,sortBy,sortedIndex,toArray,size,first,initial,rest,last,without,indexOf,shuffle,lastIndexOf,isEmpty,groupBy'.split(
      ','
    ),
    function(a) {
      r.prototype[a] = function() {
        return f[a].apply(f, [this.models].concat(f.toArray(arguments)));
      };
    }
  );
  var v = (g.View = function(a) {
      this.cid = f.uniqueId('view');
      this._configure(a || {});
      this._ensureElement();
      this.initialize.apply(this, arguments);
      this.delegateEvents();
    }),
    F = /^(\S+)\s*(.*)$/,
    w = 'model,collection,el,id,attributes,className,tagName'.split(',');
  f.extend(v.prototype, k, {
    tagName: 'div',
    $: function(a) {
      return this.$el.find(a);
    },
    initialize: function() {},
    render: function() {
      return this;
    },
    remove: function() {
      this.$el.remove();
      return this;
    },
    make: function(a, b, c) {
      a = document.createElement(a);
      b && i(a).attr(b);
      c && i(a).html(c);
      return a;
    },
    setElement: function(a, b) {
      this.$el && this.undelegateEvents();
      this.$el = a instanceof i ? a : i(a);
      this.el = this.$el[0];
      !1 !== b && this.delegateEvents();
      return this;
    },
    delegateEvents: function(a) {
      if (a || (a = n(this, 'events'))) {
        this.undelegateEvents();
        for (var b in a) {
          var c = a[b];
          f.isFunction(c) || (c = this[a[b]]);
          if (!c) throw Error('Method "' + a[b] + '" does not exist');
          var d = b.match(F),
            e = d[1],
            d = d[2],
            c = f.bind(c, this),
            e = e + ('.delegateEvents' + this.cid);
          '' === d ? this.$el.bind(e, c) : this.$el.delegate(d, e, c);
        }
      }
    },
    undelegateEvents: function() {
      this.$el.unbind('.delegateEvents' + this.cid);
    },
    _configure: function(a) {
      this.options && (a = f.extend({}, this.options, a));
      for (var b = 0, c = w.length; b < c; b++) {
        var d = w[b];
        a[d] && (this[d] = a[d]);
      }
      this.options = a;
    },
    _ensureElement: function() {
      if (this.el) this.setElement(this.el, !1);
      else {
        var a = n(this, 'attributes') || {};
        this.id && (a.id = this.id);
        this.className && (a['class'] = this.className);
        this.setElement(this.make(this.tagName, a), !1);
      }
    },
  });
  o.extend = r.extend = v.extend = function(a, b) {
    var c = G(this, a, b);
    c.extend = this.extend;
    return c;
  };
  var H = { create: 'POST', update: 'PUT', delete: 'DELETE', read: 'GET' };
  g.sync = function(a, b, c) {
    var d = H[a];
    c || (c = {});
    var e = { type: d, dataType: 'json' };
    c.url || (e.url = n(b, 'url') || t());
    if (!c.data && b && ('create' == a || 'update' == a))
      (e.contentType = 'application/json'), (e.data = JSON.stringify(b.toJSON()));
    g.emulateJSON &&
      ((e.contentType = 'application/x-www-form-urlencoded'), (e.data = e.data ? { model: e.data } : {}));
    if (g.emulateHTTP && ('PUT' === d || 'DELETE' === d))
      g.emulateJSON && (e.data._method = d),
        (e.type = 'POST'),
        (e.beforeSend = function(a) {
          a.setRequestHeader('X-HTTP-Method-Override', d);
        });
    'GET' !== e.type && !g.emulateJSON && (e.processData = !1);
    return i.ajax(f.extend(e, c));
  };
  g.wrapError = function(a, b, c) {
    return function(d, e) {
      e = d === b ? e : d;
      a ? a(b, e, c) : b.trigger('error', b, e, c);
    };
  };
  var x = function() {},
    G = function(a, b, c) {
      var d;
      d =
        b && b.hasOwnProperty('constructor')
          ? b.constructor
          : function() {
              a.apply(this, arguments);
            };
      f.extend(d, a);
      x.prototype = a.prototype;
      d.prototype = new x();
      b && f.extend(d.prototype, b);
      c && f.extend(d, c);
      d.prototype.constructor = d;
      d.__super__ = a.prototype;
      return d;
    },
    n = function(a, b) {
      return !a || !a[b] ? null : f.isFunction(a[b]) ? a[b]() : a[b];
    },
    t = function() {
      throw Error('A "url" property or function must be specified');
    };
}.call(this));

['width', 'height'].forEach(function(dimension) {
  var offset,
    Dimension = dimension.replace(/./, function(m) {
      return m[0].toUpperCase();
    });
  $.fn['outer' + Dimension] = function(margin) {
    var elem = this;
    if (elem) {
      var size = elem[dimension]();
      var sides = { width: ['left', 'right'], height: ['top', 'bottom'] };
      sides[dimension].forEach(function(side) {
        if (margin) size += parseInt(elem.css('margin-' + side), 10);
      });
      return size;
    } else {
      return null;
    }
  };
});
$.fn['end'] = function() {
  return this.prevObject || $();
};
(function($) {
  var data = {},
    dataAttr = $.fn.data,
    camelize = $.camelCase,
    exp = ($.expando = 'Zepto' + +new Date());
  function getData(node, name) {
    var id = node[exp],
      store = id && data[id];
    if (name === undefined) return store || setData(node);
    else {
      if (store) {
        if (name in store) return store[name];
        var camelName = camelize(name);
        if (camelName in store) return store[camelName];
      }
      return dataAttr.call($(node), name);
    }
  }
  function setData(node, name, value) {
    var id = node[exp] || (node[exp] = ++$.uuid),
      store = data[id] || (data[id] = attributeData(node));
    if (name !== undefined) store[camelize(name)] = value;
    return store;
  }
  function attributeData(node) {
    var store = {};
    $.each(node.attributes, function(i, attr) {
      if (attr.name.indexOf('data-') == 0)
        store[camelize(attr.name.replace('data-', ''))] = $.zepto.deserializeValue(attr.value);
    });
    return store;
  }
  $.fn.data = function(name, value) {
    return value === undefined
      ? $.isPlainObject(name)
        ? this.each(function(i, node) {
            $.each(name, function(key, value) {
              setData(node, key, value);
            });
          })
        : this.length == 0
        ? undefined
        : getData(this[0], name)
      : this.each(function() {
          setData(this, name, value);
        });
  };
  $.fn.removeData = function(names) {
    if (typeof names == 'string') names = names.split(/\s+/);
    return this.each(function() {
      var id = this[exp],
        store = id && data[id];
      if (store)
        $.each(names, function() {
          delete store[camelize(this)];
        });
    });
  };
})(Zepto);
(function($) {
  var touch = {},
    touchTimeout,
    tapTimeout,
    swipeTimeout,
    longTapTimeout,
    longTapDelay = 750,
    gesture;
  function swipeDirection(x1, x2, y1, y2) {
    return Math.abs(x1 - x2) >= Math.abs(y1 - y2) ? (x1 - x2 > 0 ? 'Left' : 'Right') : y1 - y2 > 0 ? 'Up' : 'Down';
  }
  function longTap() {
    longTapTimeout = null;
    if (touch.last) {
      touch.el.trigger('longTap');
      touch = {};
    }
  }
  function cancelLongTap() {
    if (longTapTimeout) clearTimeout(longTapTimeout);
    longTapTimeout = null;
  }
  function cancelAll() {
    if (touchTimeout) clearTimeout(touchTimeout);
    if (tapTimeout) clearTimeout(tapTimeout);
    if (swipeTimeout) clearTimeout(swipeTimeout);
    if (longTapTimeout) clearTimeout(longTapTimeout);
    touchTimeout = tapTimeout = swipeTimeout = longTapTimeout = null;
    touch = {};
  }
  function cancelEvent(event) {
    event = event || window.event;
    if (event.preventDefault) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.returnValue = false;
      event.cancelBubble = true;
    }
  }
  function isPrimaryTouch(event) {
    return (event.pointerType == 'touch' || event.pointerType == event.MSPOINTER_TYPE_TOUCH) && event.isPrimary;
  }
  function isPointerEventType(e, type) {
    return e.type == 'pointer' + type || e.type.toLowerCase() == 'mspointer' + type;
  }
  $.fn.registerTouch = function() {
    var now,
      delta,
      deltaX = 0,
      deltaY = 0,
      firstTouch,
      _isPointerType;
    if ('MSGesture' in window) {
      gesture = new MSGesture();
      gesture.target = this[0];
    }
    this.bind('MSGestureEnd', function(e) {
      var swipeDirectionFromVelocity =
        e.velocityX > 1
          ? 'Right'
          : e.velocityX < -1
          ? 'Left'
          : e.velocityY > 1
          ? 'Down'
          : e.velocityY < -1
          ? 'Up'
          : null;
      if (swipeDirectionFromVelocity) {
        touch.el.trigger('swipe');
        touch.el.trigger('swipe' + swipeDirectionFromVelocity);
      }
    })
      .on('touchstart MSPointerDown pointerdown', function(e) {
        if ((_isPointerType = isPointerEventType(e, 'down')) && !isPrimaryTouch(e)) return;
        firstTouch = _isPointerType ? e : e.touches[0];
        if (e.touches && e.touches.length === 1 && touch.x2) {
          touch.x2 = undefined;
          touch.y2 = undefined;
        }
        now = Date.now();
        delta = now - (touch.last || now);
        touch.el = $('tagName' in firstTouch.target ? firstTouch.target : firstTouch.target.parentNode);
        touchTimeout && clearTimeout(touchTimeout);
        touch.x1 = firstTouch.pageX;
        touch.y1 = firstTouch.pageY;
        if (delta > 0 && delta <= 250) touch.isDoubleTap = true;
        touch.last = now;
        longTapTimeout = setTimeout(longTap, longTapDelay);
        if (gesture && _isPointerType) gesture.addPointer(e.pointerId);
      })
      .on('touchmove MSPointerMove pointermove', function(e) {
        if ((_isPointerType = isPointerEventType(e, 'move')) && !isPrimaryTouch(e)) return;
        firstTouch = _isPointerType ? e : e.touches[0];
        cancelLongTap();
        touch.x2 = firstTouch.pageX;
        touch.y2 = firstTouch.pageY;
        var hDistance = Math.abs(touch.x1 - touch.x2);
        deltaX += hDistance;
        deltaY += Math.abs(touch.y1 - touch.y2);
        if (hDistance > 20) {
          var event = $.Event('drag');
          event.distance = hDistance;
          event.direction = touch.x1 > touch.x2 ? 'left' : 'right';
          touch.el.trigger(event);
          cancelEvent(e);
        }
      })
      .on('touchend MSPointerUp pointerup', function(e) {
        if ((_isPointerType = isPointerEventType(e, 'up')) && !isPrimaryTouch(e)) return;
        cancelLongTap();
        var event = $.Event('dragend');
        event.distance = touch.x1 - touch.x2;
        event.direction = touch.x1 > touch.x2 ? 'left' : 'right';
        touch.el.trigger(event);
        if ((touch.x2 && Math.abs(touch.x1 - touch.x2) > 30) || (touch.y2 && Math.abs(touch.y1 - touch.y2) > 30))
          swipeTimeout = setTimeout(function() {
            touch.el.trigger('swipe');
            touch.el.trigger('swipe' + swipeDirection(touch.x1, touch.x2, touch.y1, touch.y2));
            touch = {};
          }, 0);
        else if ('last' in touch)
          if (deltaX < 30 && deltaY < 30) {
            tapTimeout = setTimeout(function() {
              var event = $.Event('tap');
              event.cancelTouch = cancelAll;
              touch.el.trigger(event);
              if (touch.isDoubleTap) {
                if (touch.el) touch.el.trigger('doubleTap');
                touch = {};
              } else {
                touchTimeout = setTimeout(function() {
                  touchTimeout = null;
                  if (touch.el) touch.el.trigger('singleTap');
                  touch = {};
                }, 250);
              }
            }, 0);
          } else {
            touch = {};
          }
        deltaX = deltaY = 0;
      })
      .on('touchcancel MSPointerCancel pointercancel', cancelAll);
    $(window).on('scroll', cancelAll);
  };
  [
    'drag',
    'dragend',
    'swipe',
    'swipeLeft',
    'swipeRight',
    'swipeUp',
    'swipeDown',
    'doubleTap',
    'tap',
    'singleTap',
    'longTap',
  ].forEach(function(eventName) {
    $.fn[eventName] = function(callback) {
      return this.on(eventName, callback);
    };
  });
})(Zepto);
(function($, undefined) {
  var prefix = '',
    eventPrefix,
    endEventName,
    endAnimationName,
    vendors = { Webkit: 'webkit', Moz: '', O: 'o' },
    document = window.document,
    testEl = document.createElement('div'),
    supportedTransforms = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,
    transform,
    transitionProperty,
    transitionDuration,
    transitionTiming,
    transitionDelay,
    animationName,
    animationDuration,
    animationTiming,
    animationDelay,
    cssReset = {};
  function dasherize(str) {
    return str.replace(/([a-z])([A-Z])/, '$1-$2').toLowerCase();
  }
  function normalizeEvent(name) {
    return eventPrefix ? eventPrefix + name : name.toLowerCase();
  }
  $.each(vendors, function(vendor, event) {
    if (testEl.style[vendor + 'TransitionProperty'] !== undefined) {
      prefix = '-' + vendor.toLowerCase() + '-';
      eventPrefix = event;
      return false;
    }
  });
  transform = prefix + 'transform';
  cssReset[(transitionProperty = prefix + 'transition-property')] = cssReset[
    (transitionDuration = prefix + 'transition-duration')
  ] = cssReset[(transitionDelay = prefix + 'transition-delay')] = cssReset[
    (transitionTiming = prefix + 'transition-timing-function')
  ] = cssReset[(animationName = prefix + 'animation-name')] = cssReset[
    (animationDuration = prefix + 'animation-duration')
  ] = cssReset[(animationDelay = prefix + 'animation-delay')] = cssReset[
    (animationTiming = prefix + 'animation-timing-function')
  ] = '';
  $.fx = {
    off: eventPrefix === undefined && testEl.style.transitionProperty === undefined,
    speeds: { _default: 400, fast: 200, slow: 600 },
    cssPrefix: prefix,
    transitionEnd: normalizeEvent('TransitionEnd'),
    animationEnd: normalizeEvent('AnimationEnd'),
  };
  $.fn.animate = function(properties, duration, ease, callback, delay) {
    if ($.isFunction(duration)) (callback = duration), (ease = undefined), (duration = undefined);
    if ($.isFunction(ease)) (callback = ease), (ease = undefined);
    if ($.isPlainObject(duration))
      (ease = duration.easing),
        (callback = duration.complete),
        (delay = duration.delay),
        (duration = duration.duration);
    if (duration)
      duration = (typeof duration == 'number' ? duration : $.fx.speeds[duration] || $.fx.speeds._default) / 1000;
    if (delay) delay = parseFloat(delay) / 1000;
    return this.anim(properties, duration, ease, callback, delay);
  };
  $.fn.anim = function(properties, duration, ease, callback, delay) {
    var key,
      cssValues = {},
      cssProperties,
      transforms = '',
      that = this,
      wrappedCallback,
      endEvent = $.fx.transitionEnd,
      fired = false;
    if (duration === undefined) duration = $.fx.speeds._default / 1000;
    if (delay === undefined) delay = 0;
    if ($.fx.off) duration = 0;
    if (typeof properties == 'string') {
      cssValues[animationName] = properties;
      cssValues[animationDuration] = duration + 's';
      cssValues[animationDelay] = delay + 's';
      cssValues[animationTiming] = ease || 'linear';
      endEvent = $.fx.animationEnd;
    } else {
      cssProperties = [];
      for (key in properties)
        if (supportedTransforms.test(key)) transforms += key + '(' + properties[key] + ') ';
        else (cssValues[key] = properties[key]), cssProperties.push(dasherize(key));
      if (transforms) (cssValues[transform] = transforms), cssProperties.push(transform);
      if (duration > 0 && typeof properties === 'object') {
        cssValues[transitionProperty] = cssProperties.join(', ');
        cssValues[transitionDuration] = duration + 's';
        cssValues[transitionDelay] = delay + 's';
        cssValues[transitionTiming] = ease || 'linear';
      }
    }
    wrappedCallback = function(event) {
      if (typeof event !== 'undefined') {
        if (event.target !== event.currentTarget) return;
        $(event.target).unbind(endEvent, wrappedCallback);
      } else $(this).unbind(endEvent, wrappedCallback);
      fired = true;
      $(this).css(cssReset);
      callback && callback.call(this);
    };
    if (duration > 0) {
      this.bind(endEvent, wrappedCallback);
      setTimeout(function() {
        if (fired) return;
        wrappedCallback.call(that);
      }, duration * 1000 + 25);
    }
    this.size() && this.get(0).clientLeft;
    this.css(cssValues);
    if (duration <= 0)
      setTimeout(function() {
        that.each(function() {
          wrappedCallback.call(this);
        });
      }, 0);
    return this;
  };
  testEl = null;
})(Zepto);
var IV;
(function(IV) {
  var AdProgressReporter = (function() {
    function AdProgressReporter(irollId, reporter, customMetrics, trackingEventCallback) {
      this.irollId = irollId;
      this.reporter = reporter;
      this.customMetrics = customMetrics;
      this.trackingEventCallback = trackingEventCallback;
      this.playReported = false;
    }
    AdProgressReporter.prototype.startReporting = function(playCallback) {
      var _this = this;
      var completeCallback = _.once(function() {
        _this.reportAdComplete();
      });
      this.playCallback = function() {
        _this.playReported = true;
        playCallback();
      };
      IV.Events.on(
        this.irollId + ':ad_play',
        _.once(function(forceImmediateImpression) {
          if (typeof forceImmediateImpression === 'undefined') {
            forceImmediateImpression = false;
          }
          if (forceImmediateImpression) {
            _this.reportAdPlay();
          } else {
            _this.waitForTimeUpdateBeforeImpression(function() {
              _this.reportAdPlay();
            });
          }
        })
      );
      IV.Events.on(
        this.irollId + ':video_videoPassed25',
        _.once(function() {
          _this.reportAdFirstQuartile();
        })
      );
      IV.Events.on(
        this.irollId + ':video_videoPassed50',
        _.once(function() {
          _this.reportAdMidpoint();
        })
      );
      IV.Events.on(
        this.irollId + ':video_videoPassed75',
        _.once(function() {
          _this.reportAdThirdQuartile();
        })
      );
      ['video_ended', 'ad_ended'].forEach(function(eventName) {
        IV.Events.on(_this.irollId + ':' + eventName, completeCallback);
      });
      IV.Events.on(this.irollId + ':video_videoPassedCustomPoint', function() {
        _this.customMetrics.forEach(function(url) {
          _this.reporter.submit3rdPartyTracking([{ data: url, type: IV.ThirdPartyTrackingReporter.URL_TRACKING_TYPE }]);
        });
      });
    };
    AdProgressReporter.prototype.waitForTimeUpdateBeforeImpression = function(callback) {
      var _this = this;
      var onTimeUpdate = function(data) {
        if (typeof data.currentTime !== 'undefined' && data.currentTime > 0) {
          IV.Events.off(_this.irollId + ':video_timeupdate', onTimeUpdate);
          callback();
        }
      };
      IV.Events.on(this.irollId + ':video_timeupdate', onTimeUpdate);
    };
    AdProgressReporter.prototype.reportAdPlay = function() {
      IV.Events.trigger(this.irollId + ':videoStarted');
      IV.Events.trigger(this.irollId + ':ad_started');
      this.reporter.submit({ action: 'play' });
      this.trackingEventCallback('playingStart');
      this.playCallback();
    };
    AdProgressReporter.prototype.reportAdFirstQuartile = function() {
      this.reporter.submit({ action: 'vpoint', event_value: 25, event_id: 'percent' });
      this.trackingEventCallback('playingFirstQuartile');
    };
    AdProgressReporter.prototype.reportAdMidpoint = function() {
      this.reporter.submit({ action: 'vpoint', event_value: 50, event_id: 'percent' });
      this.trackingEventCallback('playingMidpoint');
    };
    AdProgressReporter.prototype.reportAdThirdQuartile = function() {
      this.reporter.submit({ action: 'vpoint', event_value: 75, event_id: 'percent' });
      this.trackingEventCallback('playingThirdQuartile');
    };
    AdProgressReporter.prototype.reportAdComplete = function() {
      this.reporter.submit({ action: 'vpoint', event_value: 100, event_id: 'percent' });
      this.trackingEventCallback('playingComplete');
    };
    return AdProgressReporter;
  })();
  IV.AdProgressReporter = AdProgressReporter;
})(IV || (IV = {}));
var IV;
(function(IV) {
  var CanvasAppender = (function() {
    function CanvasAppender(core) {
      this.core = core;
    }
    CanvasAppender.prototype.getSize = function() {
      var externalInterface = this.core.get('interface');
      if (externalInterface !== null && _.isFunction(externalInterface.getAdSize)) {
        return externalInterface.getAdSize();
      } else {
        return { width: $(window).width() || -1, height: $(window).height() || -1 };
      }
    };
    CanvasAppender.prototype.setContainer = function(mainContainer) {
      this.mainContainer = mainContainer;
    };
    CanvasAppender.prototype.appendToContainer = function(elem) {
      this.mainContainer.appendChild(elem);
    };
    return CanvasAppender;
  })();
  IV.CanvasAppender = CanvasAppender;
})(IV || (IV = {}));
var IV;
(function(IV) {
  var ClickthruRedirectHelper = (function() {
    function ClickthruRedirectHelper(adConfig, reporter, getPlayStartTime) {
      this.dtsClickthruUrl = null;
      this.dtsClickthruUrl = '' + adConfig.dtsUrl + ClickthruRedirectHelper.DTS_CLICKTHRU_PATH + '?';
      this.reporter = reporter;
      this.getPlayStartTime = getPlayStartTime;
    }
    Object.defineProperty(ClickthruRedirectHelper, 'DTS_CLICKTHRU_PATH', {
      get: function() {
        return '/clktru/action/htmlclk';
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(ClickthruRedirectHelper, 'CLICKTHRU_ACTION', {
      get: function() {
        return 'clktru';
      },
      enumerable: true,
      configurable: true,
    });
    ClickthruRedirectHelper.prototype.redirect = function(clickthruUrl, label) {
      var options = label ? { event_id: label } : {};
      return this.wrapUrlWithDts(clickthruUrl, options);
    };
    ClickthruRedirectHelper.prototype.wrapUrlWithDts = function(clickthruUrl, options) {
      var template = _.template('<%= reportUrl %>&click=<%= clickthruUrl %>');
      options = this.overrideChildVideoOptions(options);
      var reportData = this.reporter.prepareReportData(options);
      reportData.action = ClickthruRedirectHelper.CLICKTHRU_ACTION;
      reportData.relative_time = _.now() - this.getPlayStartTime();
      var reportUrl = this.reporter.addReportDataToReportUrl(reportData, this.dtsClickthruUrl);
      clickthruUrl = encodeURIComponent(clickthruUrl);
      return template({ reportUrl: reportUrl, clickthruUrl: clickthruUrl });
    };
    ClickthruRedirectHelper.prototype.overrideChildVideoOptions = function(options) {
      var childVideoService = this.reporter.get('childVideoService');
      if (childVideoService.childVideoPlaying()) {
        var selectedChildVideoData = childVideoService.getChildVideoData();
        return _.extend(options, {
          video_id: selectedChildVideoData.videoId,
          placement_hash: selectedChildVideoData.placementHash,
          project_state: selectedChildVideoData.projectState,
        });
      }
      return options;
    };
    return ClickthruRedirectHelper;
  })();
  IV.ClickthruRedirectHelper = ClickthruRedirectHelper;
})(IV || (IV = {}));
var IV;
(function(IV) {
  var ConsoleLogUtil = (function() {
    function ConsoleLogUtil() {}
    ConsoleLogUtil.prototype.log = function(message) {
      console.log(message);
    };
    return ConsoleLogUtil;
  })();
  IV.ConsoleLogUtil = ConsoleLogUtil;
})(IV || (IV = {}));
var IV;
(function(IV) {
  var CurrentScriptPopulator = (function() {
    function CurrentScriptPopulator() {}
    CurrentScriptPopulator.populateCurrentScript = function(contextDoc) {
      IV._currentScript =
        this.findCurrentScript(contextDoc) || this.findLastScript(contextDoc) || this.findScriptByDomain(contextDoc);
    };
    CurrentScriptPopulator.findCurrentScript = function(contextDoc) {
      return contextDoc['currentScript'];
    };
    CurrentScriptPopulator.findLastScript = function(contextDoc) {
      var scripts = contextDoc.getElementsByTagName('script');
      if (scripts && scripts.length > 0) {
        var script = scripts[scripts.length - 1];
        if (CurrentScriptPopulator.hasRelevantDomain(script)) {
          return script;
        }
      }
      return null;
    };
    CurrentScriptPopulator.findScriptByDomain = function(contextDoc) {
      var scripts = contextDoc.getElementsByTagName('script');
      if (scripts) {
        for (var idx = 0; idx < scripts.length; idx++) {
          var script = scripts[idx];
          if (CurrentScriptPopulator.hasRelevantDomain(script)) {
            return script;
          }
        }
      }
      return null;
    };
    CurrentScriptPopulator.hasRelevantDomain = function(script) {
      var domains = [IV.baseData.staticDomain, IV.baseData.securedStaticDomain].filter(function(domain) {
        return !!domain;
      });
      return domains.some(function(domain) {
        return script.src && script.src.indexOf(domain) >= 0;
      });
    };
    return CurrentScriptPopulator;
  })();
  IV.CurrentScriptPopulator = CurrentScriptPopulator;
})(IV || (IV = {}));
var IV;
(function(IV) {
  var DataInjector = (function() {
    function DataInjector(qstRdr, tool) {
      if (qstRdr === void 0) {
        qstRdr = new IV.QueryStringReader();
      }
      if (tool === void 0) {
        tool = IV.toolkit;
      }
      this.tool = tool;
      this.qstRdr = qstRdr;
    }
    DataInjector.prototype.injectCustomParams = function(core) {
      var htmldata = DataInjector.HTML_DATA;
      var ecp = DataInjector.EXTERNAL_CUSTOM_PARAMETERS;
      var newData = core.get('data') || {};
      newData[htmldata] = newData[htmldata] || {};
      newData[htmldata][ecp] = this.getCustomParams();
      core.set('data', newData);
    };
    DataInjector.prototype.getCustomParams = function() {
      var ret = this.qstRdr.getExternalCustomParams(IV._currentScript, document.location.search);
      return ret.hasOwnProperty('ivc') ? this.tool.parseQueryString(ret['ivc']) : ret;
    };
    DataInjector.HTML_DATA = 'html-custom-data';
    DataInjector.EXTERNAL_CUSTOM_PARAMETERS = 'EXTERNAL_CUSTOM_PARAMETERS';
    return DataInjector;
  })();
  IV.DataInjector = DataInjector;
})(IV || (IV = {}));
var IV;
(function(IV) {
  var FeatureBitsResolver = (function() {
    function FeatureBitsResolver() {}
    Object.defineProperty(FeatureBitsResolver, 'FEATURE_BITS_KEY', {
      get: function() {
        return 'featureBits';
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(FeatureBitsResolver, 'FEATURE_NAMES', {
      get: function() {
        return {
          VPAID_CLKTRU_HANDLE_BY_INNOVID_FOR_NON_IN_APP: 'vpaid_clktru_handle_by_innovid_for_non_in_app',
          VPAID_VIEWABILITY_GEO_FRIENDLY_IFRAME: 'vpaid_viewability_geo_friendly_iframe',
        };
      },
      enumerable: true,
      configurable: true,
    });
    FeatureBitsResolver.isEnabled = function(name) {
      var featureBits = IV.baseData[FeatureBitsResolver.FEATURE_BITS_KEY];
      return !!featureBits && featureBits[name];
    };
    return FeatureBitsResolver;
  })();
  IV.FeatureBitsResolver = FeatureBitsResolver;
})(IV || (IV = {}));
var IV;
(function(IV) {
  var HtmlTextTagInjector = (function() {
    function HtmlTextTagInjector(iframeInjector) {
      this.iframeInjector = iframeInjector;
    }
    HtmlTextTagInjector.prototype.injectTextTagIntoIframe = function(textTag) {
      var injectedIframe = this.iframeInjector.injectIframeIntoDoc(document);
      var ifrDoc = injectedIframe.contentWindow.document;
      this.writeTextTagInsideIframe(ifrDoc, textTag);
    };
    HtmlTextTagInjector.prototype.writeTextTagInsideIframe = function(ifrDoc, textTag) {
      var _this = this;
      textTag = this.trimStratEndWhiteSpaces(textTag);
      textTag = this.addBackslashBeforeApostropheMark(textTag);
      textTag = this.splitScriptTag(textTag);
      var iframeHTML = "<html><body marginwidth='0' marginheight='0' topmargin='0' leftmargin='0'><scr" + 'ipt>';
      var codeLines = this.splitTextTagIntoLines(textTag);
      codeLines.forEach(function(line) {
        iframeHTML += "document.write('" + _this.trimStratEndWhiteSpaces(line) + "');\n";
      });
      iframeHTML += '</scr' + 'ipt></body></html>';
      ifrDoc.open().write('' + iframeHTML);
      ifrDoc.close();
    };
    HtmlTextTagInjector.prototype.trimStratEndWhiteSpaces = function(text) {
      return text.replace(/^\s+|\s+$/g, '');
    };
    HtmlTextTagInjector.prototype.addBackslashBeforeApostropheMark = function(text) {
      return text.replace(/'/gi, "\\'");
    };
    HtmlTextTagInjector.prototype.splitScriptTag = function(text) {
      text = text.replace(/<script/gi, "<scr' + 'ipt");
      return text.replace(/\/script>/gi, "/scr' + 'ipt>");
    };
    HtmlTextTagInjector.prototype.splitTextTagIntoLines = function(text) {
      var tempCode = text.replace(/(\r\n|\n|\r)/gm, '!!NEWLINE!!');
      return tempCode.split('!!NEWLINE!!');
    };
    return HtmlTextTagInjector;
  })();
  IV.HtmlTextTagInjector = HtmlTextTagInjector;
})(IV || (IV = {}));
var IV;
(function(IV) {
  var InAppDetector = (function() {
    function InAppDetector(deviceInfo) {
      this.deviceInfo = deviceInfo;
      this.isInApp = this.isInAppMem();
    }
    Object.defineProperty(InAppDetector, 'IN_APP_REGEXP_LIST', {
      get: function() {
        return [
          /(iPhone|iPod|iPad).+AppleWebKit.*Mobile(?!.*Safari)/i,
          /\(.*Android.*\).+AppleWebKit.*Version\/\d/i,
          /^Dalvik/i,
          /ANVSDK/i,
          /CFNetwork.*Darwin/i,
          /^com\..*?Android/i,
          /FreeWheelAdManager/i,
          /LiveRailSDK/i,
          /TransperaSDK/i,
          /AerServSDK/i,
          /Anvato Android SDK/i,
          /Vungle/i,
          /Mozilla\/.*Android.*; wv\) AppleWebKit/i,
          /Mozilla\/.*Android.*Gecko\) Version\/\d+\.\d+/i,
          /ExoPlayerLib/i,
        ];
      },
      enumerable: true,
      configurable: true,
    });
    InAppDetector.prototype.isInAppMem = function() {
      var _this = this;
      return _.memoize(function() {
        return !_this.deviceInfo.isDesktop() && (_this.hasDeviceId() || _this.hasInAppUserAgent());
      });
    };
    InAppDetector.prototype.hasDeviceId = function() {
      return !!this.deviceInfo.getDeviceIdFromRequest();
    };
    InAppDetector.prototype.hasInAppUserAgent = function() {
      var userAgent = this.deviceInfo.getNavigatorUserAgent();
      return InAppDetector.IN_APP_REGEXP_LIST.some(function(regexp) {
        return regexp.test(userAgent);
      });
    };
    return InAppDetector;
  })();
  IV.InAppDetector = InAppDetector;
})(IV || (IV = {}));
var IV;
(function(IV) {
  (function(Action) {
    Action[(Action['INVPLY'] = 0)] = 'INVPLY';
    Action[(Action['INVPT'] = 1)] = 'INVPT';
  })(IV.Action || (IV.Action = {}));
  var Action = IV.Action;
  var LOG_ACTION_FORMAT = '>>>> HTML Internal Video ';
  var InUnitVideoQuartileActionUtil = (function() {
    function InUnitVideoQuartileActionUtil() {}
    InUnitVideoQuartileActionUtil.toValue = function(action) {
      switch (action) {
        case Action.INVPLY:
          return 'invply';
        case Action.INVPT:
          return 'invpt';
      }
    };
    InUnitVideoQuartileActionUtil.toMessage = function(action, eventId, eventValue) {
      switch (action) {
        case Action.INVPLY:
          return LOG_ACTION_FORMAT + 'Play: ' + eventId;
        case Action.INVPT:
          return LOG_ACTION_FORMAT + eventValue + '%: ' + eventId;
      }
    };
    return InUnitVideoQuartileActionUtil;
  })();
  IV.InUnitVideoQuartileActionUtil = InUnitVideoQuartileActionUtil;
})(IV || (IV = {}));
var IV;
(function(IV) {
  var InnovidLogger = (function() {
    function InnovidLogger(debugMode, toolKit) {
      if (toolKit === void 0) {
        toolKit = IV.toolkit;
      }
      this.debugMode = debugMode;
      this.toolKit = toolKit;
    }
    Object.defineProperty(InnovidLogger, 'DEBUG_MODE', {
      get: function() {
        return '[INNOVID.DEBUG]';
      },
      enumerable: true,
      configurable: true,
    });
    InnovidLogger.prototype.debug = function() {
      var valuesToWrite = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        valuesToWrite[_i - 0] = arguments[_i];
      }
      if (this.debugMode) {
        var now = this.toolKit.generateDate();
        var message = '[' + now + ']' + InnovidLogger.DEBUG_MODE + ' ' + valuesToWrite.join(' ');
        console.log(message);
      }
    };
    return InnovidLogger;
  })();
  IV.InnovidLogger = InnovidLogger;
})(IV || (IV = {}));
var IV;
(function(IV) {
  var MacroMapper = (function() {
    function MacroMapper(data, htmlData, ecp) {
      if (data === void 0) {
        data = {};
      }
      if (htmlData === void 0) {
        htmlData = IV.DataInjector.HTML_DATA;
      }
      if (ecp === void 0) {
        ecp = IV.DataInjector.EXTERNAL_CUSTOM_PARAMETERS;
      }
      var customData = data[htmlData] || {};
      this.publisherValues = customData[ecp] || {};
    }
    Object.defineProperty(MacroMapper, 'CDATA_OPEN', {
      get: function() {
        return '<![CDATA[';
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(MacroMapper, 'CDATA_CLOSE', {
      get: function() {
        return ']]>';
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(MacroMapper, 'CDATA_MACRO_OPEN', {
      get: function() {
        return /(\$\$__CDATA__\$\$)/;
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(MacroMapper, 'CDATA_MACRO_END', {
      get: function() {
        return /(\$\$__CDATA_CLOSE__\$\$)/;
      },
      enumerable: true,
      configurable: true,
    });
    MacroMapper.prototype.expandSessionId = function(trackingData, sessionId) {
      if (trackingData === void 0) {
        trackingData = '';
      }
      return this.expandStaticMacro(/(\{iv_sessionid\})/gi, sessionId, trackingData);
    };
    MacroMapper.prototype.expandTimeStamp = function(trackingData) {
      if (trackingData === void 0) {
        trackingData = '';
      }
      return this.expandStaticMacro(/(\[timestamp\])/gi, new Date().getTime().toString(), trackingData);
    };
    MacroMapper.prototype.expandAll = function(pixel) {
      var macrosInPixel = _.uniq(pixel.match(/(%257B|{|%7B)(ivc_|iv_geo_)\w+(%257D|}|%7D)/gi));
      return this.foundMatches(macrosInPixel) ? this.expand(macrosInPixel, pixel) : pixel;
    };
    MacroMapper.prototype.fixCDATA = function(blob) {
      var fixedCdataOpen = this.expandStaticMacro(MacroMapper.CDATA_MACRO_OPEN, MacroMapper.CDATA_OPEN, blob);
      return this.expandStaticMacro(MacroMapper.CDATA_MACRO_END, MacroMapper.CDATA_CLOSE, fixedCdataOpen);
    };
    MacroMapper.prototype.addOrUpdateMacro = function(key, value) {
      this.publisherValues[key] = value;
    };
    MacroMapper.prototype.expandStaticMacro = function(pattern, replace, reportUrl) {
      if (reportUrl === void 0) {
        reportUrl = '';
      }
      reportUrl = _.isArray(reportUrl) ? IV.toolkit.trim(reportUrl.shift() || '') : IV.toolkit.trim(reportUrl);
      return pattern.exec(reportUrl) ? reportUrl.replace(pattern, replace) : reportUrl;
    };
    MacroMapper.prototype.encode = function(value, macro) {
      var encodeTwice = /(%7B)(ivc_|iv_geo_)\w+(%7D)/gi,
        encodeOnce = /({)(ivc_|iv_geo_)\w+(})/gi;
      return encodeOnce.test(macro)
        ? encodeURIComponent(value)
        : encodeTwice.test(macro)
        ? encodeURIComponent(encodeURIComponent(value))
        : encodeURIComponent(encodeURIComponent(encodeURIComponent(value)));
    };
    MacroMapper.prototype.expand = function(macrosInPixel, pixel) {
      var _this = this;
      macrosInPixel.forEach(function(macro) {
        var key = macro.replace(/{|}|%7B|%7D|%257B|%257D/gi, '');
        pixel = _this.publisherValues.hasOwnProperty(key)
          ? pixel.replace(macro, _this.encode(_this.publisherValues[key], macro))
          : pixel.replace(macro, '');
      });
      return pixel;
    };
    MacroMapper.prototype.foundMatches = function(arr) {
      return arr && arr.length > 0;
    };
    return MacroMapper;
  })();
  IV.MacroMapper = MacroMapper;
})(IV || (IV = {}));
var IV;
(function(IV) {
  var SkipAdHandler = (function() {
    function SkipAdHandler(iroll) {
      this.iroll = iroll;
    }
    SkipAdHandler.prototype.skipAd = function() {
      IV.Events.trigger(this.iroll.get('id') + ':skip');
      var reporter = this.iroll.report;
      reporter.submit({ action: 'skip', relative_time: new Date().getTime() - this.iroll.get('playStartTime') });
      IV.Events.trigger(this.iroll.get('id') + ':close');
    };
    return SkipAdHandler;
  })();
  IV.SkipAdHandler = SkipAdHandler;
})(IV || (IV = {}));
var IV;
(function(IV) {
  var ThirdPartyTrackingReporter = (function() {
    function ThirdPartyTrackingReporter(htmlTagInjector, mapper) {
      this.mapper = mapper;
      this.htmlTagInjector = htmlTagInjector;
    }
    Object.defineProperty(ThirdPartyTrackingReporter, 'URL_TRACKING_TYPE', {
      get: function() {
        return 'url-tracking';
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(ThirdPartyTrackingReporter, 'HTML_TRACKING_TYPE', {
      get: function() {
        return 'html-tracking';
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(ThirdPartyTrackingReporter, 'INJECT_HTML_TRACKING_ERROR', {
      get: function() {
        return 'inject-html-tracking-tag-error';
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(ThirdPartyTrackingReporter, 'THIRD_PARTY_TRACKING_IFRAME_ID', {
      get: function() {
        return '3rdparty-tracking';
      },
      enumerable: true,
      configurable: true,
    });
    ThirdPartyTrackingReporter.prototype.report = function(
      trackingData,
      trackingType,
      sessionId,
      firePixelCb,
      reportLogCb
    ) {
      trackingData = this.mapper.expandAll(
        this.mapper.expandTimeStamp(this.mapper.expandSessionId(trackingData, sessionId))
      );
      if (trackingType === ThirdPartyTrackingReporter.URL_TRACKING_TYPE) {
        this.firePixel(trackingData, firePixelCb);
      } else if (trackingType === ThirdPartyTrackingReporter.HTML_TRACKING_TYPE) {
        this.injectHtmlTextTag(trackingData, reportLogCb);
      }
    };
    ThirdPartyTrackingReporter.prototype.firePixel = function(trackingData, firePixelCb) {
      firePixelCb(trackingData);
    };
    ThirdPartyTrackingReporter.prototype.injectHtmlTextTag = function(trackingData, reportLogCb) {
      try {
        this.htmlTagInjector.injectTextTagIntoIframe(this.mapper.fixCDATA(trackingData));
      } catch (e) {
        reportLogCb({
          event_id: ThirdPartyTrackingReporter.INJECT_HTML_TRACKING_ERROR,
          event_value: e.message + ': ' + trackingData,
        });
      }
    };
    return ThirdPartyTrackingReporter;
  })();
  IV.ThirdPartyTrackingReporter = ThirdPartyTrackingReporter;
})(IV || (IV = {}));
var IV;
(function(IV) {
  var VideoClickBehaviour;
  (function(VideoClickBehaviour) {
    VideoClickBehaviour[(VideoClickBehaviour['CLICKTHRU'] = 0)] = 'CLICKTHRU';
    VideoClickBehaviour[(VideoClickBehaviour['OPEN_MICROSITE'] = 1)] = 'OPEN_MICROSITE';
    VideoClickBehaviour[(VideoClickBehaviour['DO_NOTHING'] = 2)] = 'DO_NOTHING';
  })(VideoClickBehaviour || (VideoClickBehaviour = {}));
  var VideoClickHandler = (function() {
    function VideoClickHandler(core, adConfig, eventBus, mapper) {
      this.core = core;
      this.adConfig = adConfig;
      this.eventBus = eventBus;
      this.mapper = mapper;
    }
    Object.defineProperty(VideoClickHandler, 'CLICKTHRU_MAIN_LABEL', {
      get: function() {
        return 'main';
      },
      enumerable: true,
      configurable: true,
    });
    VideoClickHandler.prototype.handleClick = function(ev) {
      this.core.report.submit({
        action: 'click',
        event_id: 'position',
        event_value: ev.pageX + 'x' + ev.pageY,
        relative_time: _.now() - this.core.get('playStartTime'),
      });
      var clickBehaviour = this.detectClickBehaviour();
      if (clickBehaviour === VideoClickBehaviour.OPEN_MICROSITE) {
        this.handleMicrositeBehaviour();
      } else if (clickBehaviour === VideoClickBehaviour.CLICKTHRU) {
        this.handleClickthruBehaviour();
        ev.stopPropagation();
        ev.preventDefault();
      }
      if (clickBehaviour !== VideoClickBehaviour.OPEN_MICROSITE) {
        this.logMainClickthruEvent();
      }
    };
    VideoClickHandler.prototype.detectClickBehaviour = function() {
      var clickBehaviour = VideoClickBehaviour.DO_NOTHING;
      var data = this.adConfig.app_data;
      var toolbar = data['toolbar'];
      var isMicrosite = toolbar && toolbar.data.engagementType === 'minisite';
      if (isMicrosite && (!toolbar.data.clickBehavior || toolbar.data.clickBehavior === 'open-microsite')) {
        clickBehaviour = VideoClickBehaviour.OPEN_MICROSITE;
      } else if (data['video-clicks'] && data['video-clicks']['click-thru-url']) {
        clickBehaviour = VideoClickBehaviour.CLICKTHRU;
      }
      return clickBehaviour;
    };
    VideoClickHandler.prototype.handleMicrositeBehaviour = function() {
      this.eventBus.trigger('openMicrosite', true);
    };
    VideoClickHandler.prototype.handleClickthruBehaviour = function() {
      var clickthruUrl = this.adConfig.app_data['video-clicks']['click-thru-url'];
      var videoPlayer = this.core.get('videoPlayer');
      videoPlayer.pause();
      this.core.report.clickthru(VideoClickHandler.CLICKTHRU_MAIN_LABEL);
      var coreId = this.core.get('id');
      this.eventBus.trigger(coreId + ':userClick');
      this.reportTrackingUrl();
      this.core.windowOpen(clickthruUrl, VideoClickHandler.CLICKTHRU_MAIN_LABEL);
    };
    VideoClickHandler.prototype.reportTrackingUrl = function() {
      var _this = this;
      var data = this.adConfig.app_data;
      if (data['placement-config'] && data['placement-config']['hotspot-clicks']) {
        data['placement-config']['hotspot-clicks']
          .filter(function(hotspot) {
            return hotspot.id === VideoClickHandler.CLICKTHRU_MAIN_LABEL && _.isArray(hotspot.tracking);
          })
          .forEach(function(hotspot) {
            _this.core.report.submit3rdPartyTracking(hotspot.tracking);
          });
      }
    };
    VideoClickHandler.prototype.logMainClickthruEvent = function() {
      if (this.core.get('reportEventsToConsole')) {
        console.log('>>>> Main video clickthru');
      }
    };
    return VideoClickHandler;
  })();
  IV.VideoClickHandler = VideoClickHandler;
})(IV || (IV = {}));
var IV;
(function(IV) {
  var VideoVolumeHandler = (function() {
    function VideoVolumeHandler(videoElement) {
      this.videoElement = videoElement;
    }
    VideoVolumeHandler.prototype.onVolumeChange = function(volume) {
      if (this.isVolumeValid(volume)) {
        this.setVideoVolume(volume);
      }
    };
    VideoVolumeHandler.prototype.isVolumeValid = function(volume) {
      var currentVolume = this.videoElement.volume;
      return typeof volume !== 'undefined' && !isNaN(volume) && volume >= 0 && volume <= 1 && currentVolume !== volume;
    };
    VideoVolumeHandler.prototype.setVideoVolume = function(volume) {
      if (typeof volume !== 'number') {
        volume = parseFloat(volume);
      }
      this.videoElement.volume = volume;
    };
    VideoVolumeHandler.prototype.bindVolumeChangeEvent = function(initialVolume) {
      if (this.isVolumeValid(initialVolume)) {
        this.setVideoVolume(initialVolume);
      }
      var onVolumeChange = this.onVolumeChange;
      IV.Events.on('volumechange', onVolumeChange, this);
    };
    VideoVolumeHandler.prototype.unbindVolumeChangeEvent = function() {
      var onVolumeChange = this.onVolumeChange;
      IV.Events.off('volumechange', onVolumeChange);
    };
    return VideoVolumeHandler;
  })();
  IV.VideoVolumeHandler = VideoVolumeHandler;
})(IV || (IV = {}));
var IV;
(function(IV) {
  var ChildPlacementsTrackingEventDispatcher = (function() {
    function ChildPlacementsTrackingEventDispatcher(coreId) {
      this.coreId = coreId;
    }
    Object.defineProperty(ChildPlacementsTrackingEventDispatcher, 'trackingEventMap', {
      get: function() {
        return {
          init: 'init',
          play: 'playingStart',
          intrct: 'adFirstInteraction',
          'vpoint:25': 'playingFirstQuartile',
          'vpoint:50': 'playingMidpoint',
          'vpoint:75': 'playingThirdQuartile',
          'vpoint:100': 'playingComplete',
        };
      },
      enumerable: true,
      configurable: true,
    });
    ChildPlacementsTrackingEventDispatcher.prototype.trigger = function(action, eventValue, placementHash) {
      var eventKey = action;
      if (action === 'vpoint') {
        eventKey += ':' + eventValue;
      }
      if (ChildPlacementsTrackingEventDispatcher.trackingEventMap.hasOwnProperty(eventKey)) {
        IV.Events.trigger(
          this.coreId +
            ':tracking:child:' +
            placementHash +
            ':' +
            ChildPlacementsTrackingEventDispatcher.trackingEventMap[eventKey]
        );
      }
    };
    return ChildPlacementsTrackingEventDispatcher;
  })();
  IV.ChildPlacementsTrackingEventDispatcher = ChildPlacementsTrackingEventDispatcher;
})(IV || (IV = {}));
var IV;
(function(IV) {
  var ChildPlacementsTrackingEventListener = (function() {
    function ChildPlacementsTrackingEventListener(coreId) {
      this.coreId = coreId;
    }
    ChildPlacementsTrackingEventListener.prototype.start = function(childPlacementsTrackingMap, reporter) {
      var _this = this;
      var childPlacementHashes = Object.keys(childPlacementsTrackingMap);
      childPlacementHashes.forEach(function(placementHash) {
        var placementTrackingMap = childPlacementsTrackingMap[placementHash];
        var trackingEventTypes = Object.keys(placementTrackingMap);
        trackingEventTypes.forEach(function(trackingEventType) {
          var trackingItems = placementTrackingMap[trackingEventType];
          IV.Events.on(_this.coreId + ':tracking:child:' + placementHash + ':' + trackingEventType, function() {
            return reporter.submit3rdPartyTracking(trackingItems);
          });
        });
      });
    };
    return ChildPlacementsTrackingEventListener;
  })();
  IV.ChildPlacementsTrackingEventListener = ChildPlacementsTrackingEventListener;
})(IV || (IV = {}));
var IV;
(function(IV) {
  var ChildVideoEventHandler = (function() {
    function ChildVideoEventHandler(coreId, childVideoService) {
      this.coreId = coreId;
      this.childVideoService = childVideoService;
      this.triggerChildInteractEventOnce = _.once(this.triggerChildInteractEvent);
    }
    ChildVideoEventHandler.prototype.handleRollover = function(element) {
      $(element).on('mouseover', this.childAction(this.triggerChildInteractEventOnce));
    };
    ChildVideoEventHandler.prototype.bindActionToChildInteractEvent = function(reporter) {
      var _this = this;
      IV.Events.on(
        this.coreId + ':child:interact',
        _.once(function() {
          reporter.submit({ action: 'intrct' }, _this.childVideoService.getChildVideoContext());
        })
      );
    };
    ChildVideoEventHandler.prototype.triggerChildInteractEvent = function(event, coreId) {
      event.stopPropagation();
      if (IV.device.isDesktop()) {
        IV.Events.trigger(coreId + ':child:interact');
      }
    };
    ChildVideoEventHandler.prototype.childAction = function(action) {
      var _this = this;
      return function(e) {
        if (_this.childVideoService.childVideoPlaying()) {
          action(e, _this.coreId);
        }
        return false;
      };
    };
    return ChildVideoEventHandler;
  })();
  IV.ChildVideoEventHandler = ChildVideoEventHandler;
})(IV || (IV = {}));
var IV;
(function(IV) {
  var ChildVideoService = (function() {
    function ChildVideoService() {
      this.manualSelectionProjectState = ChildVideoService.DEFAULT_MANUAL_SELECTION_PROJECT_STATE;
      this.autoSelectionProjectState = ChildVideoService.DEFAULT_AUTO_SELECTION_PROJECT_STATE;
      this.populateChildVideoDataOnce = _.once(this.populateChildVideoData);
    }
    Object.defineProperty(ChildVideoService, 'MANUAL_SELECTION', {
      get: function() {
        return 'manual_select_project_state';
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(ChildVideoService, 'AUTO_SELECTION', {
      get: function() {
        return 'auto_select_project_state';
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(ChildVideoService, 'DEFAULT_MANUAL_SELECTION_PROJECT_STATE', {
      get: function() {
        return 8;
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(ChildVideoService, 'DEFAULT_AUTO_SELECTION_PROJECT_STATE', {
      get: function() {
        return 10;
      },
      enumerable: true,
      configurable: true,
    });
    ChildVideoService.prototype.initChildVideoData = function(options, context) {
      this.populateChildVideoDataOnce(options, context);
      return this.childVideoData;
    };
    ChildVideoService.prototype.getChildVideoData = function() {
      return this.childVideoData;
    };
    ChildVideoService.prototype.childVideoPlaying = function() {
      return _.isObject(this.childVideoData);
    };
    ChildVideoService.prototype.getChildVideoContext = function() {
      return this.childVideoData.context;
    };
    ChildVideoService.prototype.setSelectionProjectStates = function(
      manualSelectionProjectState,
      autoSelectionProjectState
    ) {
      this.manualSelectionProjectState = manualSelectionProjectState;
      this.autoSelectionProjectState = autoSelectionProjectState;
    };
    ChildVideoService.prototype.populateChildVideoData = function(options, context) {
      this.childVideoData = {
        videoId: options.video_id,
        placementHash: options.placement_hash,
        context: context,
        projectState: this.getChildProjectState(context),
      };
    };
    ChildVideoService.prototype.getChildProjectState = function(context) {
      var childProjectStateMap = {};
      childProjectStateMap[ChildVideoService.MANUAL_SELECTION] = this.manualSelectionProjectState;
      childProjectStateMap[ChildVideoService.AUTO_SELECTION] = this.autoSelectionProjectState;
      return childProjectStateMap[context];
    };
    return ChildVideoService;
  })();
  IV.ChildVideoService = ChildVideoService;
})(IV || (IV = {}));
(function(SCOPE) {
  SCOPE.ErrorDetector = function(iRoll) {
    var id = iRoll.get('id'),
      that = this;
    that.startListener = function() {
      SCOPE.Events.on(id + ':video_error', function(e) {
        var eventValue = '';
        if (e && e.target instanceof HTMLMediaElement) {
          eventValue = e.target.error.code;
        }
        that.trigger('video_error', eventValue);
      });
      SCOPE.Events.on(id + ':video_source_error', function(e) {
        var eventValue = '';
        if (e && e.target instanceof HTMLSourceElement) {
          eventValue = e.target.parentNode.networkState;
          that.trigger('video_source_error', eventValue);
        }
      });
      SCOPE.Events.on(id + ':video_high_buffering_count', function(count) {
        that.trigger('video_high_buffering_count', count);
      });
      SCOPE.Events.on(id + ':video_long_buffering_time', function(time) {
        if (!isNaN(time)) {
          that.trigger('video_long_buffering_time', time);
        }
      });
      SCOPE.Events.on(
        id + ':ad_started',
        function() {
          var winSize = this.canvas.getSize();
          if (!winSize.width || !winSize.height) {
            that.trigger('bad_window_size_at_video_start');
          }
          if (this.get('checkForVisibility')) {
            if (this.isHidden()) {
              that.trigger('document_not_visible_at_video_start');
            }
          }
          var now = _.now();
          var LATE_IMPRESSION_THRESHOLD_MS = 3000;
          if (now - this.initTimestamp > LATE_IMPRESSION_THRESHOLD_MS) {
            that.trigger('late_impression', LATE_IMPRESSION_THRESHOLD_MS);
          }
          var VERY_LATE_IMPRESSION_THRESHOLD_MS = 5000;
          if (now - this.initTimestamp > VERY_LATE_IMPRESSION_THRESHOLD_MS) {
            that.trigger('very_late_impression', VERY_LATE_IMPRESSION_THRESHOLD_MS);
          }
        },
        iRoll
      );
      SCOPE.Events.on(id + ':video_started', function() {
        var good_duration = true;
        var good_currentTime = true;
        if (iRoll.get('videoPlayer')) {
          var duration = iRoll.get('videoPlayer').getDuration();
          var currentTime = iRoll.get('videoPlayer').getCurrentTime();
          good_duration = _.isNumber(duration) && isFinite(duration);
          good_currentTime = _.isNumber(currentTime) && isFinite(currentTime);
          var sendErrorReports = [
            sendDurationErrorReport,
            sendCurrentTimeErrorReport,
            sendDurationAndCurrentTimeErrorReport,
          ];
          sendErrorReports.forEach(function(sendErrorReport) {
            sendErrorReport();
          });
        }
        function sendDurationErrorReport() {
          if (!good_duration && good_currentTime) {
            that.trigger('video_bad_properties', 'duration: ' + duration);
          }
        }
        function sendCurrentTimeErrorReport() {
          if (!good_currentTime && good_duration) {
            that.trigger('video_bad_properties', 'currentTime: ' + currentTime);
          }
        }
        function sendDurationAndCurrentTimeErrorReport() {
          if (!good_duration && !good_currentTime) {
            that.trigger('video_bad_properties', 'duration: ' + duration + '; currentTime: ' + currentTime);
          }
        }
      });
      SCOPE.Events.on(id + ':container_error', function(message, action) {
        var eventValue = '';
        if (_.isString(action)) {
          eventValue += '(Action:' + action + ')';
        }
        if (_.isString(message)) {
          eventValue += '(Message:' + message + ')';
        }
        that.trigger('container_error', eventValue);
      });
      SCOPE.Events.on(id + ':video_videoPassed75', function() {
        [25, 50].forEach(function(vp) {
          if (!iRoll.report.wasPixelLoaded({ action: 'vpoint', event_value: vp })) {
            that.trigger('vpoint_missing', vp);
          }
        });
      });
      SCOPE.Events.on(id + ':ad_interface_error', function(module, e) {
        var msg = e.message ? e.message.substr(0, 500) : '';
        that.trigger(module + '_error', msg);
      });
      SCOPE.Events.on(id + ':video_timeupdate_event_missing', function() {
        that.trigger('video_timeupdate_event_missing');
      });
      SCOPE.Events.on(id + ':vpaid_clickthru', function(playerHandles) {
        that.trigger('vpaid_clickthru', playerHandles ? 'PLAYER_HANDLED' : 'AD_HANDLED');
      });
      SCOPE.Events.on(id + ':viewability_iframe_type', function(iframeType) {
        that.trigger('viewability_iframe_type', iframeType);
      });
      window.onerror = _.throttle(function(e) {
        if (typeof e === 'string') {
          that.trigger('js_error', e.substring(0, 256));
        }
      }, 500);
    };
  };
  _.extend(SCOPE.ErrorDetector.prototype, Backbone.Events);
})(IV);
(function(SCOPE) {
  SCOPE.Session = function(config) {
    var sampleRateRec = getSampleRateRecord(config);
    var debugSampleRateRec = getDebugSampleRateRecord();
    this.isMonitored = function() {
      return sampleRateRec.isMonitored;
    };
    this.getSampleRate = function() {
      return sampleRateRec.sampleRate;
    };
    this.isDebugEnabled = function() {
      return debugSampleRateRec.isDebugEnabled;
    };
    this.getCreativeSampleRate = function() {
      return debugSampleRateRec.sampleRate;
    };
    function getSampleRateRecord(config) {
      var sampleRate = 0,
        isMonitored = false;
      if (isPreviewMode()) {
        sampleRate = 1;
        isMonitored = true;
      } else if (config['error-monitoring-enabled']) {
        sampleRate = toSampleRate(config['error-monitoring-rate'] || 0);
        isMonitored = flipCoin(sampleRate);
      }
      return { sampleRate: sampleRate, isMonitored: isMonitored };
    }
    function getDebugSampleRateRecord() {
      var sampleRate = 0.01,
        isDebugEnabled = false;
      var configSampleRate = SCOPE.baseData.app_data['debug-sample-rate'];
      if (isPreviewMode()) {
        sampleRate = 1;
        isDebugEnabled = true;
      } else if (
        typeof configSampleRate === 'number' &&
        (configSampleRate >= 0 && configSampleRate <= 100) &&
        configSampleRate
      ) {
        sampleRate = toSampleRate(SCOPE.baseData.app_data['debug-sample-rate']);
        isDebugEnabled = flipCoin(sampleRate);
      }
      return { sampleRate: sampleRate, isDebugEnabled: isDebugEnabled };
    }
    function isPreviewMode() {
      return _.isUndefined(config['placement-config']) || config['placement-config']['placement-hash'] === '-1';
    }
    function toSampleRate(val) {
      var rate = val | 0;
      return rate / 100.0;
    }
    function flipCoin(sampleRate) {
      var rand = Math.random(),
        result = false;
      if (rand < sampleRate) {
        result = true;
      }
      return result;
    }
  };
  _.extend(SCOPE.Session.prototype, Backbone.Events);
})(IV);
(function(SCOPE) {
  SCOPE.Canvas = function(iroll, canvasAppender) {
    var el = document.createElement('DIV'),
      defaultFontSize = 16,
      that = this,
      currentWidth,
      currentHeight,
      currentOrientation;
    el.id = 'iv-iroll';
    canvasAppender.appendToContainer(el);
    iroll.childVideoEventHandler.handleRollover(el);
    $(el).one('mouseover', '*', function(event) {
      event.stopPropagation();
      if (SCOPE.device.isDesktop()) {
        SCOPE.Events.trigger(iroll.get('id') + ':interact');
      }
    });
    function init() {
      var adSize = that.getSize();
      currentWidth = adSize.width;
      currentHeight = adSize.height;
      currentOrientation = SCOPE.device.getDeviceOrientation(adSize.width, adSize.height);
      setInterval(monitorWindowWidth, 500);
      if (typeof $.fn.registerTouch === 'function') {
        $(el).registerTouch();
      }
      $(el).attr('platform-type', SCOPE.device.getPlatformType());
      $(el).attr('os-type', SCOPE.device.getOSType());
      addMouseCaptureOverlay();
    }
    function monitorWindowWidth() {
      var adSize = that.getSize();
      if (currentWidth !== adSize.width || currentHeight !== adSize.height) {
        currentWidth = adSize.width;
        currentHeight = adSize.height;
        SCOPE.Events.trigger('winResize');
      }
      var newOrientation = SCOPE.device.getDeviceOrientation(adSize.width, adSize.height);
      if (currentOrientation !== newOrientation) {
        currentOrientation = newOrientation;
        SCOPE.Events.trigger('orientationChange');
      }
      $(el).attr('orientation', newOrientation);
    }
    function addMouseCaptureOverlay() {
      var overlay = buildResponsiveContainer();
      overlay.addClass('iv-mouse-capture-overlay');
      $(el).append(overlay);
      $(overlay).on(iroll.getVideoClickEventType(), function(ev) {
        SCOPE.Events.trigger('video_click', ev);
      });
      $(overlay).on('touchmove', function(ev) {
        ev.preventDefault();
      });
    }
    function buildResponsiveContainer(className) {
      var cont = $('<div/>'),
        sizes = that.getSize();
      cont.addClass(className);
      cont.width(sizes.width).height(sizes.height);
      SCOPE.Events.on('winResize', function() {
        var newSizes = that.getSize();
        cont.width(newSizes.width).height(newSizes.height);
      });
      return cont;
    }
    this.addElement = function(elem) {
      if (elem) {
        $(el).append(elem);
      }
    };
    this.addResponsiveElement = function(elem) {
      if (elem) {
        var cont = buildResponsiveContainer('iv-elem-cont');
        cont.append(elem);
        $(el).append(cont);
      }
    };
    this.getSize = function() {
      return canvasAppender.getSize();
    };
    this.getScale = function() {
      var adSize = this.getSize(),
        config = iroll.get('config'),
        platformScale = SCOPE.toolkit.getPlatformScaleParameter(config.platformScaling);
      var maxAdDimension = Math.max(adSize.width, adSize.height),
        adScale = maxAdDimension / config.previewParam.width;
      return adScale / platformScale;
    };
    this.getDefaultFontSize = function() {
      return defaultFontSize;
    };
    this.setScale = function(scale) {
      $(el).css({ fontSize: scale });
    };
    this.remove = function() {
      if (el !== null) {
        while (el.firstChild) {
          el.removeChild(el.firstChild);
        }
        el.parentNode.removeChild(el);
        el = null;
      }
    };
    this.injectCss = function(cssPath) {
      var ownerDoc = el.ownerDocument;
      var linkRef = ownerDoc.createElement('link');
      linkRef.setAttribute('rel', 'stylesheet');
      linkRef.setAttribute('type', 'text/css');
      linkRef.setAttribute('href', cssPath);
      (ownerDoc.head || ownerDoc.getElementsByTagName('head')[0]).appendChild(linkRef);
    };
    this.registerInteractEvent = function() {
      $(el).on(iroll.get('mainEngagementEvent'), '*', function(event) {
        event.stopPropagation();
        $(event.currentTarget).trigger('interact', event);
      });
      $(el).on(iroll.getVideoClickEventType(), '*', function(event) {
        event.stopPropagation();
        $(event.currentTarget).trigger('interact-to-play', event);
      });
    };
    init.apply(this);
  };
})(IV);
(function(SCOPE) {
  SCOPE.AppsCore = Backbone.Model.extend({
    defaults: {
      sendLogs: false,
      playStartTime: null,
      interface: null,
      debug: false,
      autoscale: false,
      appPath: '',
      servicePath: '',
      nonCdnServicePath: '',
      reportUrl: '',
      errorReportUrl: '',
      runtimeConfigUrl: '',
      version: 'unknown',
      el: null,
      mainContainer: null,
      videoContainer: null,
      appsContainer: null,
      durationBar: null,
      plugins: {},
      data: {},
      config: {},
      toolbar: null,
      id: null,
      sysLog: [],
      CloseButton: false,
      BackButton: false,
      CloseButtonTimeout: 5000,
      windowOpen: null,
      appModeCustomEvents: {
        iOSPauseURL: 'EXTENSION_STOP',
        iOSPlayURL: 'EXTENSION_PLAY',
        iOSClickThrewURL: 'EXTENSION_OPEN_URL:',
      },
      showClickToResume: true,
      delayAppVisibility: true,
      mainEngagementEvent: 'tap',
      displayVideo: true,
      supportHLS: true,
      inlinePlaybackForced: false,
      videoPlayer: null,
      enableErrorReporting: true,
      checkForVisibility: false,
      linearOverStream: false,
      reportDummyErrorPixel: false,
      sessionMonitoringRate: 1,
      reportImpressionsToLog: true,
      reportEventsToConsole: false,
      initialized: false,
      waitForCreativeToLoad: false,
      wrapCreativeWithIframe: false,
    },
    canvas: null,
    session: null,
    report: null,
    errorDetector: null,
    videoClickHandler: null,
    initTimestamp: 0,
    progressReporter: null,
    macroMapper: null,
    childVideoService: null,
    childVideoEventHandler: null,
    childPlacementsTrackingEventListener: null,
    clickthruRedirectHelper: null,
    inAppDetector: null,
    initialize: function() {
      var that = this,
        baseData = SCOPE.baseData;
      if (!this.get('autoscale')) {
        $('head').append(
          '<meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, ' +
            'minimum-scale=1, width=device-width, target-densitydpi=device-dpi">'
        );
      }
      new SCOPE.DataInjector().injectCustomParams(this);
      this.set({
        appPath: baseData.appPath,
        servicePath: baseData.servicePath,
        nonCdnServicePath: baseData.nonCdnServicePath,
        cssPath: baseData.cssPath,
        reportUrl: baseData.reportUrl,
        errorReportUrl: baseData.errorReportUrl,
        runtimeConfigUrl: baseData.runtimeConfigUrl,
        version: baseData.mobileCoreVersion,
      });
      this.set('id', _.uniqueId('IV_'));
      if (!this.get('sendLogs')) {
        this.bindTrackingEvents();
      }
      this.set('canvasAppender', new SCOPE.CanvasAppender(this));
      this.session = new SCOPE.Session(baseData.app_data);
      this.macroMapper = new SCOPE.MacroMapper(this.get('data'));
      var iframeInjector = new SCOPE.FriendlyIframeInjector(
        SCOPE.ThirdPartyTrackingReporter.THIRD_PARTY_TRACKING_IFRAME_ID
      );
      var htmlTagInjector = new SCOPE.HtmlTextTagInjector(iframeInjector);
      var thirdPartyTrackingReporter = new SCOPE.ThirdPartyTrackingReporter(htmlTagInjector, this.macroMapper);
      var childPlacementsTrackingEventDispatcher = new SCOPE.ChildPlacementsTrackingEventDispatcher(this.get('id'));
      this.childVideoService = new SCOPE.ChildVideoService();
      this.childVideoEventHandler = new SCOPE.ChildVideoEventHandler(this.get('id'), this.childVideoService);
      this.childPlacementsTrackingEventListener = new SCOPE.ChildPlacementsTrackingEventListener(this.get('id'));
      this.report =
        this.report ||
        new SCOPE.reportAnalytics({
          instance: this.toJSON(),
          instanceClass: this,
          session: this.session,
          thirdPartyTrackingReporter: thirdPartyTrackingReporter,
          childVideoService: this.childVideoService,
          childPlacementsTrackingEventDispatcher: childPlacementsTrackingEventDispatcher,
        });
      this.clickthruRedirectHelper = new SCOPE.ClickthruRedirectHelper(SCOPE.baseData, this.report, function() {
        return that.get('playStartTime');
      });
      this.inAppDetector = new SCOPE.InAppDetector(IV.device);
      this.bindErrorEvents();
      this.on('init', function() {
        that.bindAnalyticsEvents();
        that.bindSystemEvents();
        that.bindChildPlacementsTrackingEvents();
        var id = that.get('id');
        SCOPE.Events.on(id + ':video_videoPassed1Sec', function() {
          if (that.get('delayAppVisibility')) {
            $('.iv-in-app-icon, #iv-tray, .iv-floating-icon-container').css({ visibility: 'visible' });
          }
        });
        that.createCanvas();
        SCOPE.Events.trigger('IRollInit', that);
        that.initTimestamp = new Date().getTime();
        if (!that.shouldWaitForCreativeToLoad()) {
          that.set('initialized', true);
          SCOPE.Events.trigger(id + ':core_initialized', that);
        }
      });
      SCOPE.Events.on(
        this.get('id') + ':appClickThru',
        function() {
          if (this.get('videoPlayer') && this.get('videoPlayer').isPlaying()) {
            this.get('videoPlayer').pause();
          }
        },
        that
      );
    },
    shouldWaitForCreativeToLoad: function() {
      return !!this.get('waitForCreativeToLoad');
    },
    shouldWrapCreativeWithIframe: function() {
      return !!this.get('wrapCreativeWithIframe');
    },
    setAttribute: function(attrs) {
      if (_.isObject(attrs)) {
        this.set(attrs, { silent: true });
      }
    },
    $log: function() {
      if (this.get('debug')) {
      }
    },
    injectVideo: function() {
      var data = this.get('data'),
        that = this;
      if (!this.has('videoPlayer')) {
        this.set('videoPlayer', new SCOPE.InternalVideoPlayer(this));
      }
      this.get('videoPlayer').init(data, this);
      if (data.video) {
        this.loadVideoSource(data.video.renditions, this);
      }
      this.videoClickHandler = new SCOPE.VideoClickHandler(this, SCOPE.baseData, SCOPE.Events, this.macroMapper);
      this.get('videoPlayer').on('interact', function(ev) {
        that.videoClickHandler.handleClick(ev);
      });
    },
    loadVideoSource: function(renditions) {
      if (this.get('linearOverStream') !== true) {
        this.get('videoPlayer').loadVideoSource(renditions);
      }
    },
    injectCSSToDoc: function() {
      this.canvas.injectCss(this.get('cssPath'));
    },
    removeVideo: function() {
      if (this.get('videoPlayer')) {
        this.get('videoPlayer').pause();
      }
    },
    cleanUp: function() {
      SCOPE.Events.off();
      if (this.get('videoPlayer') && typeof this.get('videoPlayer').cleanUp === 'function') {
        this.get('videoPlayer').cleanUp();
      }
      this.canvas.remove();
    },
    initAppsSystem: function() {
      if (this.get('reportDummyErrorPixel')) {
        this.report.reportLog({ event_id: 'dummy' });
      }
      if (this.get('displayVideo')) {
        this.injectVideo();
      }
      SCOPE.Events.trigger('IRollReady', this, this.get('data'));
      SCOPE.Events.trigger(this.get('id') + ':impression', this);
    },
    createCanvas: function() {
      var canvasContainer = null;
      if (_.isNull(this.get('mainContainer'))) {
        canvasContainer = document.body;
      } else {
        canvasContainer = this.get('mainContainer');
      }
      var canvasAppender = this.get('canvasAppender');
      canvasAppender.setContainer(canvasContainer);
      this.canvas = new SCOPE.Canvas(this, canvasAppender);
    },
    windowOpen: function(url, label) {
      url = this.macroMapper.expandAll(url);
      url = this.clickthruRedirectHelper.redirect(url, label);
      if (this.report.isIvcExdataEnabled()) {
        url = this.report.decorateUrlWithExdata(url);
      }
      SCOPE.Events.trigger(this.get('id') + ':openUrl', url);
      SCOPE.Events.trigger(this.get('id') + ':appClickThru', url);
      if (_.isFunction(this.get('interface')['windowOpen'])) {
        this.get('interface')['windowOpen'](url);
      }
    },
    supportFeature: function(feature) {
      var externalInterface = this.get('interface');
      if (externalInterface !== null && typeof externalInterface.supports === 'function') {
        return externalInterface.supports(feature);
      } else {
        return false;
      }
    },
    onInteract: function(elem, func) {
      elem.on(this.get('mainEngagementEvent'), func);
    },
    reportEngage: function(eventId) {
      var that = this;
      that.report.submit({ action: 'engage', event_id: eventId });
      SCOPE.Events.trigger(that.get('id') + ':engage');
    },
    reportInteract: function() {
      this.report.submit({ action: 'intrct' });
      this.fireTrackingEvent('adFirstInteraction');
    },
    bindAnalyticsEvents: function() {
      var that = this,
        id = this.get('id'),
        playFired = false,
        engaged = false,
        interactedBeforePlay = false,
        customMetrics = that.get('data').customMetrics;
      SCOPE.Events.on(id + ':userClick', function() {
        if (engaged) {
          return;
        }
        engaged = true;
        that.reportEngage('user');
      });
      SCOPE.Events.on(id + ':auto_engage', function() {
        if (engaged) {
          return;
        }
        engaged = true;
        that.reportEngage('default');
      });
      SCOPE.Events.on(id + ':core_initialized', function() {
        var adSize = that.canvas.getSize();
        that.report.submit({ action: 'init', size: adSize.width + 'x' + adSize.height });
      });
      SCOPE.Events.on(
        id + ':interact',
        _.once(function() {
          if (playFired) {
            that.reportInteract();
          } else {
            interactedBeforePlay = true;
          }
        })
      );
      this.childVideoEventHandler.bindActionToChildInteractEvent(that.report);
      this.progressReporter = new SCOPE.AdProgressReporter(
        id,
        this.report,
        customMetrics,
        this.fireTrackingEvent.bind(this)
      );
      this.progressReporter.startReporting(function() {
        playFired = true;
        that.set({ playStartTime: new Date().getTime() });
        if (that.get('reportImpressionsToLog')) {
          that.report.reportLog({ event_id: 'impression' });
        }
        if (interactedBeforePlay) {
          that.reportInteract();
        }
      });
    },
    bindSystemEvents: function() {
      SCOPE.Events.on('appsDataReady', this.initAppsSystem, this);
      SCOPE.Events.on('startApps', this.initAppsSystem, this);
      SCOPE.Events.on('orientationchange', function() {
        SCOPE.Events.trigger('repaint');
      });
      this.on('start', this.initAppsSystem, this);
    },
    bindTrackingEvents: function() {
      var that = this,
        id = this.get('id');
      var eventsList = {};
      if (_.isObject(this.get('data')['placement-config'])) {
        eventsList = this.get('data')['placement-config']['tracking-events'];
      }
      _.forEach(eventsList, function(trackingItems, eventName) {
        var handler = _.bind(that.reportTrackingEvent, that, eventName, trackingItems);
        SCOPE.Events.on(id + ':tracking:' + eventName, handler);
      });
    },
    bindChildPlacementsTrackingEvents: function() {
      var placementConfig = this.get('data')['placement-config'];
      if (_.isObject(placementConfig)) {
        var childPlacementsTracking = placementConfig['child-placements-tracking'];
        if (_.isObject(childPlacementsTracking)) {
          this.childPlacementsTrackingEventListener.start(childPlacementsTracking, this.report);
        }
      }
    },
    bindErrorEvents: function() {
      this.errorDetector = new SCOPE.ErrorDetector(this);
      this.errorDetector.on(
        'all',
        function(eventId, eventValue) {
          this.report.reportLog({ event_id: eventId, event_value: eventValue || '' });
        },
        this
      );
      this.errorDetector.startListener();
    },
    fireTrackingEvent: function(eventName) {
      var id = this.get('id'),
        event = id + ':tracking:' + eventName;
      SCOPE.Events.trigger(event);
    },
    reportTrackingEvent: function(eventName, trackingItems) {
      this.report.submit3rdPartyTracking(trackingItems);
    },
    getVideoClickEventType: function() {
      if (SCOPE.device.needsClickEventToPlay()) {
        return 'click';
      } else {
        return this.get('mainEngagementEvent');
      }
    },
    isHidden: function() {
      var prop = SCOPE.device.getHiddenProp();
      if (!prop) return false;
      return document[prop];
    },
    shouldForceInternalPlayer: function() {
      return (
        this.get('data').forceInternalPlayer ||
        (this.get('data').forceInternalPlayerOnDesktopOnly && SCOPE.device.isDesktop())
      );
    },
  });
})(IV);
(function(SCOPE) {
  SCOPE.CurrentScriptPopulator.populateCurrentScript(document);
})(IV);
(function(SCOPE) {
  if (_.isUndefined(SCOPE.Events)) {
    SCOPE.Events = function() {};
    _.extend(SCOPE.Events, Backbone.Events);
  }
})(IV);
(function(SCOPE) {
  SCOPE.VideoSpy = function(videoElem) {
    this.videoElem = videoElem;
    this.state = null;
    var instance = this,
      activityLog = new SCOPE.ActivityLog(),
      passedPoints = { pass1sec: false, pass25: false, pass50: false, pass75: false, cvv: false },
      customPoint = null,
      lastPlayingTime = 0,
      timeUpdateIntervalId = 0,
      timeUpdateEventFired = false,
      lastTimeUpdated = 0;
    this.MAX_BUFFERING_TIMES_AFTER_STALLED = 2;
    this.MAX_BUFFERING_COUNT = 5;
    this.MAX_BUFFERING_TIMES = [4000, 6000, 8000];
    this.SHORT_BUFFERING_TIME = 200;
    this.setCustomPoint = function(time) {
      customPoint = time;
    };
    function fireEvent(eventName, newState, ev) {
      instance.trigger(eventName, ev);
      if (newState) {
        if (isValidState(newState)) {
          instance.state = newState;
          activityLog.log(newState);
        } else {
          throw 'invalid video state';
        }
      }
    }
    function fireErrorEvent(errorType, ev) {
      instance.trigger(errorType, ev);
    }
    function isValidState(state) {
      var validStates = ['playing', 'paused', 'ended'];
      return validStates.indexOf(state) != -1;
    }
    function onTimeUpdate(elem, ev) {
      timeUpdateEventFired = true;
      updateTime(elem, ev);
    }
    function playingHeartbeat(currentTime) {
      lastPlayingTime = currentTime;
      activityLog.log('playing');
    }
    function setPassedPoint(currentTime, duration) {
      var currentProgress = (100 * currentTime) / duration;
      if (currentTime > 1 && !passedPoints.pass1sec) {
        passedPoints.pass1sec = true;
        fireEvent('video_videoPassed1Sec', null);
      }
      if (currentProgress > 25 && !passedPoints.pass25) {
        passedPoints.pass25 = true;
        fireEvent('video_videoPassed25', null);
      }
      if (currentProgress > 50 && !passedPoints.pass50) {
        passedPoints.pass50 = true;
        fireEvent('video_videoPassed50', null);
      }
      if (currentProgress > 75 && !passedPoints.pass75) {
        passedPoints.pass75 = true;
        fireEvent('video_videoPassed75', null);
      }
      if (customPoint !== null) {
        if (currentTime > customPoint && !passedPoints.cvv) {
          passedPoints.cvv = true;
          fireEvent('video_videoPassedCustomPoint', null);
        }
      }
    }
    function startBackupTimeUpdate() {
      timeUpdateIntervalId = setInterval(updateTime.bind({}, videoElem), 500);
    }
    function stopBackupTimeUpdate() {
      if (timeUpdateIntervalId) clearInterval(timeUpdateIntervalId);
      timeUpdateIntervalId = 0;
    }
    function missingTimeUpdateCheck() {
      if (!timeUpdateEventFired) instance.trigger('video_timeupdate_event_missing');
    }
    function updateTime(elem, ev) {
      if (
        lastTimeUpdated !== elem.getCurrentTime() &&
        isFinite(elem.getCurrentTime()) &&
        !isNaN(elem.getCurrentTime())
      ) {
        lastTimeUpdated = elem.getCurrentTime();
        var tDelta = elem.getCurrentTime() - lastPlayingTime;
        if (tDelta > 1.0) {
          playingHeartbeat(elem.getCurrentTime());
        }
        setPassedPoint(elem.getCurrentTime(), elem.getDuration());
        var data = { currentTime: elem.getCurrentTime(), duration: elem.getDuration(), ev: ev };
        fireEvent('video_timeupdate', null, data);
      }
    }
    videoElem.on('stalled', function() {
      if (instance.state !== 'paused') {
        activityLog.log('buffering');
        fireEvent('buffering', null);
        videoElem.on(
          'timeupdate',
          _.after(instance.MAX_BUFFERING_TIMES_AFTER_STALLED, _.once(fireEvent.bind({}, 'not_buffering', null)))
        );
      }
    });
    videoElem.on('waiting', function() {
      if (instance.state !== 'paused') {
        activityLog.log('buffering');
        fireEvent('buffering', null);
      }
    });
    videoElem.on('playing', function() {
      activityLog.log('playing');
    });
    videoElem.on('playing', _.once(startBackupTimeUpdate));
    videoElem.on('ended', stopBackupTimeUpdate);
    videoElem.on('ended', missingTimeUpdateCheck);
    videoElem.on('durationchange', fireEvent.bind({}, 'video_durationchange', null));
    videoElem.on('playing', fireEvent.bind({}, 'video_play', 'playing'));
    videoElem.on('playing', _.once(fireEvent.bind({}, 'video_started', null)));
    videoElem.on('pause', fireEvent.bind({}, 'video_pause', 'paused'));
    videoElem.on('timeupdate', onTimeUpdate.bind({}, videoElem));
    videoElem.on('ended', fireEvent.bind({}, 'video_ended', 'ended'));
    videoElem.on('webkitendfullscreen', fireEvent.bind({}, 'video_exitfullscreen', null));
    videoElem.on('error', fireErrorEvent.bind({}, 'video_error'));
    _.each(videoElem.getAllSourceChildren(), function(elem) {
      $(elem).on('error', fireErrorEvent.bind({}, 'video_source_error'));
    });
    activityLog.onCount(
      'buffering',
      this.MAX_BUFFERING_COUNT,
      fireErrorEvent.bind({}, 'video_high_buffering_count', this.MAX_BUFFERING_COUNT)
    );
    _.each(this.MAX_BUFFERING_TIMES, function(time) {
      activityLog.onTime('buffering', time, fireErrorEvent.bind({}, 'video_long_buffering_time', time));
    });
    activityLog.onTime('buffering', this.SHORT_BUFFERING_TIME, fireEvent.bind({}, 'video_short_buffering_time', null));
  };
  _.extend(SCOPE.VideoSpy.prototype, Backbone.Events);
})(IV);
(function(SCOPE) {
  SCOPE.ActivityLog = function() {
    var eventsMap = [],
      countListeners = [],
      timers = [],
      runningTimers = [];
    this.log = function(event) {
      var now = new Date().getTime(),
        newCount;
      if (this.has(event)) {
        newCount = ++eventsMap[event].count;
        eventsMap[event].time = now;
      } else {
        newCount = 1;
        eventsMap[event] = { count: newCount, time: now };
      }
      resetAllTimers();
      startEventTimers(event);
      notifyCountListeners(event, newCount);
      return this;
    };
    this.getCount = function(event) {
      var count = 0;
      if (this.has(event)) {
        count = eventsMap[event].count;
      }
      return count;
    };
    this.has = function(event) {
      return event in eventsMap;
    };
    this.onCount = function(event, count, cb, context) {
      if (!(event in countListeners)) {
        countListeners[event] = [];
      }
      if (!(count in countListeners[event])) {
        countListeners[event][count] = [];
      }
      countListeners[event][count].push({ callback: cb, context: context });
    };
    this.onTime = function(event, time, cb, context) {
      if (!(event in timers)) {
        timers[event] = [];
      }
      timers[event].push({ time: time, cb: cb, context: context });
    };
    function notifyCountListeners(ev, count) {
      if (ev in countListeners && count in countListeners[ev]) {
        for (var cb in countListeners[ev][count]) {
          if (countListeners[ev][count].hasOwnProperty(cb)) {
            var listenerObj = countListeners[ev][count][cb];
            var context = listenerObj.context !== 'undefined' ? listenerObj.context : null;
            listenerObj.callback.call(context, ev, count);
          }
        }
      }
    }
    function resetAllTimers() {
      for (var i = 0; i < runningTimers.length; i++) {
        if (typeof runningTimers[i] === 'number') {
          clearTimeout(runningTimers[i]);
        }
      }
    }
    function startEventTimers(ev) {
      if (ev in timers) {
        for (var i = 0; i < timers[ev].length; i++) {
          var job = timers[ev][i];
          var taskId = createTimeoutTask(job.cb, job.context, job.time);
          runningTimers.push(taskId);
        }
      }
    }
    function createTimeoutTask(cb, context, time) {
      return setTimeout(function() {
        cb.apply(context);
      }, time);
    }
  };
})(IV);
(function(SCOPE) {
  var device = function() {
    var that = this;
    this.getPlatformType = _.memoize(function() {
      var ua = that.getNavigatorUserAgent();
      return ua.match(/GoogleTV|SmartTV|Internet.TV|NetCast|NETTV|AppleTV|boxee|Kylo|Roku|DLNADOC|CE\-HTML/i)
        ? 'tv'
        : ua.match(/Xbox|PLAYSTATION.3|PLAYSTATION.4|Wii/i)
        ? 'tv'
        : ua.match(/iPad/i) || (ua.match(/tablet/i) && !ua.match(/RX-34/i)) || ua.match(/FOLIO/i)
        ? 'tablet'
        : ua.match(/Linux/i) &&
          ua.match(/Android/i) &&
          !ua.match(/Fennec|mobi|HTC.Magic|HTCX06HT|Nexus.One|SC-02B|fone.945/i)
        ? 'tablet'
        : ua.match(/Kindle/i) || (ua.match(/Mac.OS/i) && ua.match(/Silk/i))
        ? 'tablet'
        : ua.match(/Opera/i) &&
          ua.match(/Windows.NT.5/i) &&
          ua.match(/HTC|Xda|Mini|Vario|SAMSUNG\-GT\-i8000|SAMSUNG\-SGH\-i9/i)
        ? 'mobile'
        : (ua.match(/Windows.(NT|XP|ME|9)/) && !ua.match(/Phone/i)) || ua.match(/Win(9|.9|NT)/i)
        ? 'desktop'
        : ua.match(/Macintosh|PowerPC/i) && !ua.match(/Silk/i)
        ? 'desktop'
        : ua.match(/Linux/i) && ua.match(/X11/i)
        ? 'desktop'
        : ua.match(/Solaris|SunOS|BSD/i)
        ? 'desktop'
        : 'mobile';
    });
    this.isAndroid = function() {
      var userAgent = this.getNavigatorUserAgent();
      return userAgent.match(/android/i) !== null;
    };
    this.is_iOS = function() {
      var userAgent = this.getNavigatorUserAgent();
      return userAgent.match('iPod') || userAgent.match('iPhone') || userAgent.match('iPad');
    };
    this.getOSType = function() {
      if (this.is_iOS()) {
        return 'ios';
      } else if (this.isAndroid()) {
        return 'android';
      } else {
        return 'other';
      }
    };
    this.getDeviceName = function() {
      var userAgent = this.getNavigatorUserAgent();
      if (userAgent.match('iPod')) {
        return 'iPod';
      } else if (userAgent.match('iPad')) {
        return 'iPad';
      } else if (userAgent.match('iPhone')) {
        return 'iPhone';
      } else if (userAgent.match(/android/i)) {
        return 'Android';
      } else if (this.isDesktop()) {
        return 'Desktop';
      }
      return undefined;
    };
    this.isDeviceHLSSupported = function() {
      if (this.is_iOS()) {
        return true;
      } else if (this.isAndroid() && versionAtLeastAsNewAs(this.getAndroidOSVersion(), '5.0')) {
        return true;
      }
      return false;
    };
    this.isDesktop = function() {
      return this.getPlatformType() === 'desktop';
    };
    this.getDeviceInformation = function() {
      var device, resolution, version, orientation, os;
      var userAgent = this.getNavigatorUserAgent();
      if (userAgent.match('iPod')) {
        device = 'iPod';
        os = 'iOS';
      } else if (userAgent.match('iPad')) {
        device = 'iPad';
        os = 'iOS';
      } else if (userAgent.match('iPhone')) {
        device = 'iPhone';
        os = 'iOS';
      } else if (userAgent.match(/android/i)) {
        device = 'Android';
        os = 'Android';
      } else {
        return userAgent;
      }
      resolution = '(' + window.screen.width + 'x' + window.screen.height + ')';
      if (os == 'iOS') {
        version = this.getiPhoneOSVersion();
      } else if (os == 'Android') {
        version = this.getAndroidOSVersion();
      }
      orientation = this.getDeviceOrientation();
      return [device, resolution, version, orientation].join(', ');
    };
    this.getWebsiteHost = function() {
      var website;
      try {
        website = this.getLocationHost();
      } catch (e) {}
      if (_.isUndefined(website)) {
        website = getHostName(document.referrer);
      }
      return website;
    };
    this.canPlayInline = function() {
      var deviceName = this.getDeviceName();
      if (deviceName === 'iPod' || deviceName === 'iPhone') {
        return supportsInline(this);
      } else {
        return true;
      }
    };
    this.getLocationHost = function() {
      return window.top.location.host;
    };
    this.getDeviceScreenSize = function() {
      return {
        w: Math.round(window.screen.width * window.devicePixelRatio),
        h: Math.round(window.screen.height * window.devicePixelRatio),
      };
    };
    this.getiPhoneOSVersion = function() {
      var match,
        userAgent = this.getNavigatorUserAgent();
      var version = this.is_iOS() ? 1.0 : false;
      if (!(match = /iP.+ OS (.*) like Mac OS X/.exec(userAgent))) {
      } else {
        version = match[1].split('_').join('.');
      }
      return version;
    };
    this.getAndroidOSVersion = function() {
      var match,
        userAgent = this.getNavigatorUserAgent();
      var version = '';
      if (!(match = /Android (\d+(?:\.\d+)+)/.exec(userAgent))) {
      } else {
        version = match[1];
      }
      return version;
    };
    this.getDeviceOrientation = function(width, height) {
      var deviceHeight = _.isUndefined(height) ? window.innerHeight : height,
        deviceWidth = _.isUndefined(width) ? window.innerWidth : width,
        aspectRatio = 1.3;
      return deviceHeight * aspectRatio > deviceWidth ? 'Portrait' : 'Landscape';
    };
    this.getDeviceScreenSizeClass = function() {
      var dim = this.getDeviceScreenSize();
      if (!this.getiPhoneOSVersion() && !this.getAndroidOSVersion()) return 'small';
      return dim.h >= 960 || dim.w >= 1280 ? 'big' : 'small';
    };
    this.supportsAnimations = function() {
      return (
        (this.isAndroid() && versionAtLeastAsNewAs(this.getAndroidOSVersion().toString(), '4.1')) ||
        (this.is_iOS() && versionAtLeastAsNewAs(this.getiPhoneOSVersion().toString(), '5.2'))
      );
    };
    this.getNavigatorUserAgent = function() {
      return navigator.userAgent;
    };
    this.needsClickEventToPlay = function() {
      return this.isAndroid();
    };
    this.getHiddenProp = function() {
      var prefixes = ['webkit', 'moz', 'ms', 'o'];
      if ('hidden' in document) return 'hidden';
      for (var i = 0; i < prefixes.length; i++) {
        if (prefixes[i] + 'Hidden' in document) return prefixes[i] + 'Hidden';
      }
      return null;
    };
    this.needsElemForcedRedraw = function() {
      return this.isAndroid();
    };
    this.getDocumentQueryString = function() {
      return document.location.search;
    };
    this.getDeviceIdFromRequest = function() {
      var queryStringReader = new SCOPE.QueryStringReader();
      return queryStringReader.getDeviceIdFromRequest(SCOPE._currentScript, this.getDocumentQueryString());
    };
    function getHostName(url) {
      var a = document.createElement('a');
      a.href = url;
      return a.hostname;
    }
    function supportsInline(currentDeviceInfo) {
      var canDoInline = SCOPE.InlineVideoValidator.shouldTransformToInlineVideo(currentDeviceInfo);
      if (!canDoInline && currentDeviceInfo.is_iOS()) {
        var currentDeviceVersion = currentDeviceInfo.getiPhoneOSVersion();
        canDoInline = versionAtLeastAsNewAs(currentDeviceVersion.toString(), '10.0.0');
      }
      return canDoInline;
    }
    function versionAtLeastAsNewAs(version, comparedTo) {
      if (!_.isString(version)) {
        return false;
      }
      var versionParts = version.split('.');
      var compareToParts = comparedTo.split('.');
      var i = 0,
        isNewer = true;
      while (isNewer === true && i < compareToParts.length) {
        if (i < versionParts.length) {
          var versionPartNum = parseInt(versionParts[i], 10);
          var compareToPartNum = parseInt(compareToParts[i], 10);
          var delta = versionPartNum - compareToPartNum;
          if (delta > 0) {
            break;
          } else if (delta < 0) {
            isNewer = false;
          }
        } else {
          isNewer = false;
        }
        i++;
      }
      return isNewer;
    }
  };
  SCOPE.device = new device();
})(IV || {});
(function(SCOPE) {
  var icons = function() {
    this.setupIcon = function(app, delayAppVisibility) {
      var icon = $('<div></div>')
        .addClass('iv-icon')
        .addClass('iv-in-app-icon')
        .css({
          display: 'inline-block',
          visibility: 'hidden',
          zIndex: 25 + (app.get('app-order-index') || 0),
          cursor: 'pointer',
        });
      if (delayAppVisibility) {
        icon.css({ visibility: 'hidden' });
      }
      app.set('icon', icon);
      return icon;
    };
    this.setIconDimensions = function(app, scaleParams, trayIconWidth, placeholder) {
      var iconCss,
        iconScale = scaleParams.floatingIconScale / scaleParams.iconScaling,
        iconWidth = trayIconWidth / scaleParams.iconScaling;
      if (placeholder.type === 'docked' && app.get('app-id') !== 'app-skip-ad') {
        iconScale = scaleParams.iconScale;
        iconWidth = trayIconWidth;
      }
      if (app.get('customLauncher') && app.get('customLauncher').url) {
        var iconData = app.get('customLauncher');
        iconCss = this.getCustomIconCss(iconData, iconScale);
        iconCss.backgroundImage = 'url(' + iconData.url + ')';
        iconCss.backgroundSize = 'contain';
      } else {
        if (app.get('app-id') === 'app-custom-icon') {
          iconCss = this.getCustomIconCss(app.get('data'), iconScale);
        } else if (app.get('app-id') !== 'app-text-label' && app.get('app-id') !== 'app-skip-ad') {
          var iconImageSize = scaleParams.iconImageSize;
          iconCss = this.getIconCss(app.get('icons'), iconImageSize, iconWidth);
        }
      }
      app.get('icon').css(iconCss);
    };
    this.getIconCss = function(iconImages, iconImageSize, trayIconWidth) {
      var imageUrl = '',
        maxWidth = 0;
      _.each(iconImages, function(appIcon) {
        if (appIcon.width <= iconImageSize && appIcon.width > maxWidth) {
          imageUrl = appIcon.url;
          maxWidth = appIcon.width;
        }
      });
      return {
        width: trayIconWidth,
        height: trayIconWidth,
        backgroundImage: imageUrl ? 'url(' + imageUrl + ')' : '',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        lineHeight: trayIconWidth,
      };
    };
    this.setIconPosition = function(icon, placeholder, scale, appsContainer, orderIndex) {
      var bounds = { width: $(appsContainer).width(), height: $(appsContainer).height() };
      var iconRect = icon[0].getBoundingClientRect(),
        floatingIconWidth = iconRect.width,
        floatingIconHeight = iconRect.height;
      var left = ((bounds.width - floatingIconWidth) * placeholder.left) / 100 + placeholder.offsetX * scale;
      var top = ((bounds.height - floatingIconHeight) * placeholder.top) / 100 + placeholder.offsetY * scale;
      var style = {
        zIndex: 25 + (orderIndex || 0),
        position: 'absolute',
        left: Math.round(left) + 'px',
        top: Math.round(top) + 'px',
      };
      icon.css(style);
      forceIconRedraw(icon[0]);
    };
    this.getCustomIconCss = function(iconData, scale) {
      var width = Math.floor(iconData.width * iconData.scale * scale);
      var height = Math.floor(iconData.height * iconData.scale * scale);
      return { width: width, height: height, lineHeight: height };
    };
    this.getCustomLauncherCss = function(iconData, scale) {
      var customCss = { width: iconData.width, height: iconData.height, lineHeight: iconData.height };
      var cssScale = 'scale(' + iconData.scale * scale + ')',
        cssOrigin = 'top left';
      customCss = _.chain(customCss)
        .extend(SCOPE.toolkit.addCssPrefixes('transform', cssScale))
        .extend(SCOPE.toolkit.addCssPrefixes('transform-origin', cssOrigin))
        .value();
      customCss.backgroundImage = 'url(' + iconData.url + ')';
      customCss.backgroundSize = 'contain';
      return customCss;
    };
    function forceIconRedraw(elem) {
      if (SCOPE.device.needsElemForcedRedraw()) {
        elem.style.display = 'inline-block';
        setTimeout(function() {
          elem.style.display = '';
        }, 0);
      }
    }
  };
  SCOPE.icons = new icons();
})(IV);
(function(SCOPE) {
  var html5video = function(options, container, initialVolume) {
    var that = this,
      params = options || {},
      defaults = {},
      iroll = options.iroll;
    var videoControls = options.controls || ['resume'];
    var _videoControls = function(args) {
      var defaults = { show: false, showControls: videoControls || ['resume'] };
      var params = args || {};
      var options = _.extend(defaults, params);
      var controlsBar = _.template('<div class="video-controls"></div>');
      var controlsButtons = {
        resume: '<a class="control control-resume" data-fn="play">&nbsp;</a>',
        play: '<a class="control control-play" data-fn="play">&nbsp;</a>',
      };
      if (options.show) {
        if (container.find('.video-controls').length > 0) {
          $(container.find('.video-controls').remove());
        }
        var controls = $(controlsBar());
        _.each(options.showControls, function(control) {
          var ctrl = controlsButtons[control];
          controls.append(ctrl);
          controls.find('.control').each(function() {
            $(this).css({ display: 'inline-block', cursor: 'pointer' });
          });
        });
        $(container)
          .append(controls)
          .on(iroll.getVideoClickEventType(), '.control', function(ev) {
            ev.preventDefault();
            var action = $(this).attr('data-fn');
            if (_.isFunction(that[action])) that[action]();
          });
      } else {
        $(container.find('.video-controls').remove());
      }
    };
    var _init = function() {
      that.el = document.createElement('video');
      if (SCOPE.InlineVideoValidator.shouldTransformToInlineVideo(SCOPE.device)) {
        SCOPE.InlineVideoFactory.create(that.el);
      }
      SCOPE.InlineVideoTransformer.checkAndOverrideFastSeek(that.el);
      $(that.el).css({
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        position: 'absolute',
        'pointer-events': 'visible',
      });
      that.el.preload = true;
      that.el.controls = false;
      $(that.el).attr('webkit-playsinline', 'webkit-playsinline');
      $(that.el).attr('playsinline', 'playsinline');
      $(that.el).addClass('iv-main-video');
      if (that.params.preview) {
        $(that.el).attr('poster', that.params.preview);
      } else {
        $(that.el).attr('poster', 'data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=');
      }
      var videoVolumeHandler = new SCOPE.VideoVolumeHandler(that.el);
      videoVolumeHandler.bindVolumeChangeEvent(initialVolume);
    };
    this.setVideoSource = function(renditions) {
      var elem = new SCOPE.VideoElementWrapper(that.el);
      var videoLoader = new SCOPE.VideoSourceLoader(elem, iroll);
      videoLoader.loadVideoSource(renditions);
      return videoLoader.isLoaded();
    };
    this.play = function() {
      this.el.play();
      _videoControls({ show: false });
    };
    this.resume = this.play;
    this.pause = function(hideControls) {
      this.el.pause();
      if (hideControls !== true) {
        _videoControls({ show: true });
      }
    };
    this.stop = function() {
      this.el.stop();
      _videoControls({ show: false });
    };
    this.showControls = function(controls) {
      _videoControls(_.extend({ show: true }, controls || {}));
    };
    this.setSrc = function(src) {
      this.el.src = src;
    };
    this.getDuration = function() {
      return this.el.duration;
    };
    this.getCurrentTime = function() {
      return this.el.currentTime;
    };
    this.getRemainingTime = function() {
      return this.getDuration() - this.getCurrentTime();
    };
    this.load = function() {
      this.el.load();
    };
    this.events = _.extend({}, Backbone.Events);
    this.params = _.extend(defaults, params);
    _init();
  };
  SCOPE.html5video = html5video;
})(IV);
(function(SCOPE) {
  SCOPE.IRollSimpleTracker = function(eventHandler, eventPrefix) {
    var map = {
      expand: 'dialogOpened',
      clickthru: 'openUrl',
      engage: 'engage',
      impression: 'ad_started',
      firstquartile: 'video_videoPassed25',
      midpoint: 'video_videoPassed50',
      thirdquartile: 'video_videoPassed75',
      completion: 'ad_ended',
    };
    this.registerCustomPixels = function(customPixels) {
      _.each(customPixels, function(urls, eventName) {
        var iRollEventName = mapEventNameToIRollEventName(eventPrefix, eventName);
        if (iRollEventName !== null) {
          var urlArr = urls;
          if (!_.isArray(urlArr)) {
            urlArr = new Array(urlArr);
          }
          _.each(urlArr, function(val) {
            eventHandler.on(iRollEventName, function() {
              fireCustomPixel(val);
            });
          });
        }
      });
    };
    function fireCustomPixel(url) {
      var req = new Image();
      req.src = url;
    }
    function mapEventNameToIRollEventName(eventPrefix, eventName) {
      if (map.hasOwnProperty(eventName)) {
        return eventPrefix + map[eventName];
      } else {
        return null;
      }
    }
  };
})(IV);
(function(SCOPE) {
  SCOPE.reportAnalytics = Backbone.Model.extend({
    defaults: {
      sendLogs: true,
      instance: null,
      instanceClass: null,
      session: null,
      thirdPartyTrackingReporter: null,
      childVideoService: null,
      childPlacementsTrackingEventDispatcher: null,
      ivcExdataEnabled: false,
      defaultReportData: {
        ad_criteria: null,
        placement_tag_id: 0,
        r: '',
        viewer_id: '',
        action: '',
        session_id: '',
        client_id: -1,
        channel_id: 0,
        project_state: 0,
        video_id: 0,
        project_hash: '',
        placement_hash: -1,
        impression_id: '',
        event_id: '',
        website: 'unknown',
        publisher_id: 0,
        event_value: '',
        fver: null,
        real_estate_id: 0,
      },
    },
    CONTEXT: {
      MANUAL_SELECT: SCOPE.ChildVideoService.MANUAL_SELECTION,
      AUTO_SELECT: SCOPE.ChildVideoService.AUTO_SELECTION,
    },
    reportedUrls: [],
    reportedOptions: [],
    errorLogQueue: [],
    loadedOptions: [],
    postLoadedPixelCallbackActions: {},
    postReportedPixelCallbackActions: {},
    initialize: function() {
      var that = this,
        instanceData = this.get('instance'),
        reportData = {},
        placementConfig = instanceData.data['placement-config'];
      _.extend(reportData, this.get('defaultReportData'));
      reportData.fver = SCOPE.baseData.mobileCoreVersion || null;
      that.childVideoService = this.get('childVideoService');
      that.childPlacementsTrackingEventDispatcher = this.get('childPlacementsTrackingEventDispatcher');
      that.reportedUrls = [];
      that.errorLogQueue = [];
      that.reportedOptions = [];
      that.loadedOptions = [];
      that.postLoadedPixelCallbackActions = {};
      that.postReportedPixelCallbackActions = {};
      that.get('instanceClass').set({ sendLogs: true });
      reportData.session_id = SCOPE.toolkit.randomId();
      reportData.viewer_id = SCOPE.toolkit.randomId();
      reportData.impression_id = SCOPE.toolkit.randomId();
      reportData.ver = instanceData.data['version'] || reportData.fver;
      reportData.website = (SCOPE.device.isDesktop()
        ? SCOPE.device.getWebsiteHost()
        : SCOPE.device.getDeviceInformation()
      ).substring(0, 128);
      if (_.isObject(placementConfig)) {
        reportData.placement_hash = placementConfig['placement-hash'] || '';
        reportData.placement_tag_id = placementConfig['placement-tag-id'] || 0;
        reportData.publisher_id = placementConfig['publisher-id'];
        reportData.channel_id = placementConfig['channel-id'];
        reportData.client_id = placementConfig['client-id'];
        reportData.project_hash = placementConfig['project-hash'];
        reportData.video_id = placementConfig['video-id'];
        reportData.project_state = placementConfig['project-state'];
        reportData.real_estate_id = placementConfig['real_estate_id'];
        that.childVideoService.setSelectionProjectStates(
          placementConfig['child-manual-project-state'],
          placementConfig['child-auto-project-state']
        );
        that.ivcExdataEnabled = placementConfig['ivcexdata-enabled'];
      } else {
        reportData.project_hash = instanceData.data['id'];
      }
      var deviceId = SCOPE.device.getDeviceIdFromRequest();
      if (deviceId) {
        reportData.device_id = deviceId;
      }
      this.url = this.get('instance').reportUrl;
      this.set('reportData', reportData);
    },
    submit3rdPartyTracking: function(trackingItems) {
      if (!this.get('sendLogs')) return;
      var that = this;
      _.each(trackingItems, function(trackingItem) {
        var session_id = that.get('reportData').session_id;
        var thirdPartyTrackingReporter = that.get('thirdPartyTrackingReporter');
        thirdPartyTrackingReporter.report(
          trackingItem.data,
          trackingItem.type,
          session_id,
          that.firePixel.bind(that),
          that.reportLog.bind(that)
        );
      });
    },
    addReportDataToReportUrl: function(reportData, reportUrl) {
      var userEvents = ['click', 'clktruevt', 'clkint', 'cxon', 'cxoff', 'engage'];
      var userEventsWithoutEngage = userEvents.filter(function(eventName) {
        return eventName !== 'engage';
      });
      _.each(reportData, function(val, key) {
        if (val === '') return;
        if (key === 'relative_time') {
          val = (val / 1000).toFixed(3);
        }
        if (_.indexOf(['init', 'play', 'vpoint', 'engage'], reportData.action) !== -1) {
          if (key === 'impression_id') return;
        }
        if (key === 'ad_criteria') {
          if (_.indexOf(userEventsWithoutEngage, reportData.action) !== -1) {
            val = null;
          } else {
            return;
          }
        }
        if (key === 'real_estate_id') {
          if (_.indexOf(userEvents, reportData.action) === -1) {
            return;
          }
        }
        reportUrl += key + '=' + encodeURIComponent(val) + '&';
      });
      return reportUrl.slice(0, -1);
    },
    prepareReportData: function(options, context) {
      var reportData = _.extend({}, this.toJSON()['reportData']);
      var pixelData = options || {};
      var isChildContext = typeof context !== 'undefined';
      if (isChildContext) {
        var childVideoData = this.childVideoService.initChildVideoData(options, context);
        _.extend(pixelData, { video_id: childVideoData.videoId, placement_hash: childVideoData.placementHash });
        _.extend(reportData, { project_state: childVideoData.projectState });
        this.childPlacementsTrackingEventDispatcher.trigger(
          pixelData.action,
          pixelData.event_value,
          pixelData.placement_hash
        );
      }
      _.extend(reportData, pixelData);
      reportData.r = SCOPE.toolkit.randomId();
      return reportData;
    },
    submit: function(options, context) {
      if (!this.get('sendLogs')) return;
      options = options || {};
      options = replaceOption(options, 'action', 'clktru', 'clktruevt');
      var reportData = this.prepareReportData(options, context);
      var reportUrlPrefix = this.get('instance').reportUrl + '?';
      var reportUrl = this.addReportDataToReportUrl(reportData, reportUrlPrefix);
      if (this.isIvcExdataEnabled()) {
        reportUrl = this.decorateUrlWithExdata(reportUrl);
      }
      if (_.indexOf(['click', 'clktruevt', 'engage'], reportData.action) !== -1) {
        var that = this;
        setTimeout(function() {
          that.firePixel(reportUrl, options);
        }, 100);
      } else {
        this.firePixel(reportUrl, options);
      }
    },
    decorateUrlWithExdata: function(reportUrl) {
      var ivcExdata = new SCOPE.QueryStringReader().getQueryIvcParam(IV._currentScript);
      if (_.isUndefined(ivcExdata)) {
        return reportUrl;
      }
      var pixelTemplate = _.template('<%= reportUrl %>&ivc_exdata=<%= ivcExdata %>');
      return pixelTemplate({ reportUrl: reportUrl, ivcExdata: ivcExdata });
    },
    isIvcExdataEnabled: function() {
      return this.ivcExdataEnabled;
    },
    getReportingTrackingItems: function(action, reporting) {
      if (!this.get('sendLogs')) {
        return [];
      }
      var reportingData = _.clone(reporting),
        eventName = action || '',
        resultArr = [];
      if (reportingData.hotspots && _.size(reportingData.hotspots) && reportingData.hotspots[eventName]) {
        _.each(reportingData.hotspots[eventName], function(item) {
          if (!_.isUndefined(item['tracking'])) {
            _.each(item['tracking'], function(url) {
              resultArr.push(url);
            });
          }
        });
      }
      return resultArr;
    },
    click: function(ev) {
      this.submit({ action: 'click', event_id: 'position', event_value: ev.pageX + 'x' + ev.pageY });
    },
    clickthru: function(event_id, event_value) {
      this.submit({
        action: 'clktruevt',
        event_id: event_id,
        event_value: event_value || '',
        relative_time: _.now() - this.get('instanceClass').get('playStartTime'),
      });
    },
    submitCreativeDebug: function(options) {
      options.action = 'creative';
      options.sample_rate = this.get('session').getCreativeSampleRate();
      this.submitCustomEvent(options);
    },
    submitError: function(options) {
      options.action = 'error';
      options.sample_rate = this.get('session').getSampleRate();
      this.submitCustomEvent(options);
    },
    submitCustomEvent: function(options) {
      options.runtime_type = 'html';
      options.suffix = this.get('instance')
        .version.split('.')
        .splice(0, 2)
        .join('_');
      this.cutPixel(options);
      var params = options || {},
        data = _.extend({}, this.toJSON()['reportData']),
        reportData = _.extend(data, params);
      delete reportData.website;
      reportData.r = SCOPE.toolkit.randomId();
      var reportUrlPrefix = this.get('instance').errorReportUrl;
      reportUrlPrefix += '?';
      var reportUrl = this.addReportDataToReportUrl(reportData, reportUrlPrefix);
      this.fireErrorPixel(reportUrl);
    },
    reportCreativeDebugLog: function(options) {
      if (this.get('session').isDebugEnabled()) {
        this.submitCreativeDebug(options);
      }
    },
    reportLog: function(options) {
      if (this.get('instance').enableErrorReporting && this.get('instance').errorReportUrl) {
        if (this.get('session').isMonitored(options.event_id)) {
          this.submitError(options);
        } else {
          this.errorLogQueue.push(options);
        }
      }
    },
    flushErrorQueue: function() {
      for (var i = 0; i < this.errorLogQueue.length; i++) {
        if (this.get('session').isMonitored(this.errorLogQueue[i].event_id)) {
          this.submitError(this.errorLogQueue[i]);
        }
      }
      this.errorLogQueue = [];
    },
    firePixel: function(reportUrl, options) {
      SCOPE.toolkit.debug('Fire Pixel - ', reportUrl);
      var that = this;
      var img = new Image(1, 1);
      if (options) {
        img.onload = this.loadedPixelCallback.bind(this, options);
      }
      img.onerror = function() {
        that.reportLog({ event_id: 'pixel_error', event_value: reportUrl });
      };
      try {
        img.src = reportUrl;
        this.reportedUrls.push(reportUrl);
        if (options) {
          this.reportedPixelCallback(options);
        }
      } catch (e) {
        this.reportLog({ event_id: 'pixel_error_message', event_value: e.message + ': ' + reportUrl });
      }
      return img;
    },
    fireErrorPixel: function(reportUrl) {
      var img = this.firePixel(reportUrl);
      var irollAd = this.get('instanceClass');
      var appendImageToElement = function(element, img) {
        if (element && _.isElement(element)) {
          try {
            img.style.display = 'none';
            element.ownerDocument.body.appendChild(img);
            return true;
          } catch (e) {
            return false;
          }
        } else {
          return false;
        }
      };
      var videoContainer = irollAd.get('videoContainer');
      var mainContainer = irollAd.get('mainContainer');
      if (!appendImageToElement(videoContainer, img)) {
        appendImageToElement(mainContainer, img);
      }
    },
    cutPixel: function(options) {
      var MAX_LEN = 125;
      if (!options.event_value) return;
      options.event_value =
        options.event_value.length > MAX_LEN ? options.event_value.substring(0, MAX_LEN) : options.event_value;
    },
    reportedPixelCallback: function(options) {
      pixelCallback(this.reportedOptions, this.postReportedPixelCallbackActions, options);
    },
    wasPixelReported: function(options) {
      return !!_.findWhere(this.reportedOptions, options);
    },
    addPostReportedPixelCallback: function(cb, action) {
      addActionCallback(this.postReportedPixelCallbackActions, cb, action);
    },
    loadedPixelCallback: function(options) {
      pixelCallback(this.loadedOptions, this.postLoadedPixelCallbackActions, options);
    },
    wasPixelLoaded: function(options) {
      return !!_.findWhere(this.loadedOptions, options);
    },
    addPostLoadedPixelCallback: function(cb, action) {
      addActionCallback(this.postLoadedPixelCallbackActions, cb, action);
    },
  });
  function replaceOption(options, key, original, replacement) {
    options[key] = options.hasOwnProperty(key)
      ? options[key] === original
        ? replacement
        : options[key]
      : options[key];
    return options;
  }
  function pixelCallback(pixelOptionsArr, callbackActionsObj, options) {
    pixelOptionsArr.push(options);
    if (callbackActionsObj.hasOwnProperty(options.action)) {
      callbackActionsObj[options.action].forEach(function(postReportPixelCb) {
        postReportPixelCb();
      });
    }
  }
  function addActionCallback(callbackActionsObj, cb, action) {
    if (callbackActionsObj.hasOwnProperty(action)) {
      callbackActionsObj[action].push(cb);
    } else {
      callbackActionsObj[action] = [cb];
    }
  }
})(IV);
(function(SCOPE) {
  if (!_.isObject(SCOPE.toolkit)) {
    SCOPE.toolkit = {};
  }
  var logger = null;
  SCOPE.toolkit.debug = function() {
    if (logger === null) {
      logger = createLogger();
    }
    logger.debug.apply(logger, arguments);
  };
  function createLogger() {
    var queryReader = new SCOPE.QueryStringReader();
    var customParams = new SCOPE.DataInjector(queryReader, SCOPE.toolkit).getCustomParams();
    var isDebugMode = customParams.hasOwnProperty('innovid_debug') ? customParams['innovid_debug'] === '1' : false;
    return new SCOPE.InnovidLogger(isDebugMode);
  }
  SCOPE.toolkit.randomId = function() {
    var res = '';
    for (var i = 0; i < 8; i++) {
      res += (0x10000 | (Math.random() * 0x10000)).toString(16).substr(1);
    }
    return res;
  };
  SCOPE.toolkit.getEnvironmentFromURL = function(url) {
    url = url.replace(/^https?:\/\//, '');
    var urlParts = url.split('/');
    var host = urlParts[0];
    return host
      .split('.')
      .slice(-2)
      .join('.');
  };
  SCOPE.toolkit.getURLparts = function(url) {
    var uriBreakeDownRexExp = new RegExp('^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?');
    var urlPartsArray = url.split(uriBreakeDownRexExp);
    var urlPartObj = {
      scheme: urlPartsArray[2],
      authority: urlPartsArray[4],
      path: urlPartsArray[5],
      query: urlPartsArray[7],
      fragment: urlPartsArray[9],
    };
    return urlPartObj;
  };
  SCOPE.toolkit.getURISchemeFromURL = function(url) {
    return SCOPE.toolkit.getURLparts(url).scheme;
  };
  SCOPE.toolkit.trim = function(str) {
    return str.replace(/^\s+|\s+$/g, '');
  };
  SCOPE.toolkit.getRGBcolorFromMScolor = function(color) {
    var red, blue, green;
    red = Math.floor(Math.floor(color / 256) / 256);
    color = color - red * 256 * 256;
    green = Math.floor(color / 256);
    blue = color - green * 256;
    return { red: red, green: green, blue: blue };
  };
  SCOPE.toolkit.dayCodesToDaysInWeek = function(recurrence) {
    var pos,
      days = recurrence.split(','),
      daysInWeek = [],
      dayCodes = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
    _.each(days, function(dayCode) {
      pos = dayCodes.indexOf(dayCode);
      if (pos != -1) {
        daysInWeek.push(pos);
      }
    });
    return daysInWeek;
  };
  SCOPE.toolkit.dateToString = function(date) {
    var weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var dateParts = date.toDateString().split(' ');
    return weekday[date.getDay()] + ', ' + dateParts[1] + '. ' + dateParts[2] + ', ' + dateParts[3];
  };
  SCOPE.toolkit.getExpirationDate = function(date) {
    var expires = new Date(date);
    expires.setFullYear(expires.getFullYear() + 1);
    return (
      expires.getFullYear() +
      '-' +
      SCOPE.toolkit.padDigits(expires.getUTCMonth() + 1, 2) +
      '-' +
      SCOPE.toolkit.padDigits(expires.getUTCDate(), 2) +
      'T' +
      SCOPE.toolkit.padDigits(expires.getUTCHours(), 2) +
      ':' +
      SCOPE.toolkit.padDigits(expires.getUTCMinutes(), 2) +
      ':' +
      SCOPE.toolkit.padDigits(expires.getUTCSeconds(), 2)
    );
  };
  SCOPE.toolkit.padDigits = function(number, digits) {
    return Array(Math.max(digits - String(number).length + 1, 0)).join(0) + number;
  };
  SCOPE.toolkit.getIconImageSize = function(sizeArray, iconSize) {
    var iconImageSize = null;
    var nextIndex = 0;
    for (var i in sizeArray) {
      if (iconImageSize == null || Math.abs(sizeArray[i] - iconSize) < Math.abs(iconImageSize - iconSize)) {
        iconImageSize = sizeArray[i];
        nextIndex++;
      }
    }
    if (nextIndex < sizeArray.length && iconSize > iconImageSize) {
      iconImageSize = sizeArray[nextIndex];
    }
    return iconImageSize;
  };
  SCOPE.toolkit.getPlatformScaleParameter = function(platformScaling) {
    var scale = 1;
    var platform = SCOPE.device.getPlatformType();
    switch (platform) {
      case 'mobile':
        scale = platformScaling.mobile;
        break;
      case 'tablet':
        scale = platformScaling.tablet;
        break;
      case 'desktop':
        scale = platformScaling.desktop;
        break;
      case 'tv':
        scale = platformScaling.tv;
        break;
    }
    return scale;
  };
  SCOPE.toolkit.secondsToHMS = function(seconds) {
    var seconds = Number(seconds);
    var h = Math.floor(seconds / 3600);
    var m = Math.floor((seconds % 3600) / 60);
    var s = Math.floor((seconds % 3600) % 60);
    return (h > 0 ? h + ':' : '') + (m > 0 ? (m < 10 ? '0' : '') + m + ':' : '00:') + (s < 10 ? '0' : '') + s;
  };
  SCOPE.toolkit.addDaySuffix = function(i) {
    var j = i % 10;
    if (j == 1 && i != 11) {
      return i + 'st';
    }
    if (j == 2 && i != 12) {
      return i + 'nd';
    }
    if (j == 3 && i != 13) {
      return i + 'rd';
    }
    return i + 'th';
  };
  SCOPE.toolkit.getDateLabel = function(date) {
    var daysDiff = SCOPE.toolkit.calcDiffInDays(date, new Date());
    switch (daysDiff) {
      case 0:
        return 'Today';
      case 1:
        return 'Tomorrow';
      default:
        return date.toDateString().split(' ')[1] + ' ' + SCOPE.toolkit.addDaySuffix(date.getDate());
    }
  };
  SCOPE.toolkit.calcDiffInDays = function(from, to) {
    var diff = from - to;
    return Math.max(Math.ceil(diff / 1000 / 60 / 60 / 24), 0);
  };
  function removeQuestionMark(str) {
    return str.charAt(0) === '?' ? str.substring(1) : str;
  }
  SCOPE.toolkit.parseQueryString = function(querystring) {
    var res = {};
    if (querystring && typeof querystring === 'string') {
      var paramString = removeQuestionMark(querystring);
      var paramPartArray = paramString.split('&');
      _.each(paramPartArray, function(paramPart) {
        var splittedParam = paramPart.split('=');
        res[splittedParam[0]] = splittedParam[1] ? decodeURIComponent(splittedParam[1]) : '';
      });
    }
    return res;
  };
  SCOPE.toolkit.addCssPrefixes = function(prop, value) {
    var cssStyle = {};
    _.each(this.getCssPrefixes(), function(prefix) {
      cssStyle[prefix + prop] = value;
    });
    return cssStyle;
  };
  SCOPE.toolkit.getCssPrefixes = function() {
    return ['', '-webkit-', '-moz-', '-ms-', '-o-'];
  };
  SCOPE.toolkit.generateDate = function() {
    var now = new Date();
    var date = [now.getFullYear(), now.getMonth() + 1, now.getDate()];
    var time = [now.getHours(), now.getMinutes(), now.getSeconds()];
    return date.join('-') + ' ' + time.join(':') + '.' + now.getMilliseconds();
  };
})(IV);
(function(SCOPE) {
  SCOPE.VideoRenditions = (function() {
    function VideoRenditions() {
      var renditionsMap = {
        iphone_stream: {
          mimetype: 'application/x-mpegurl',
          device: ['iPhone', 'iPod', 'iPad', 'Android'],
          extension: 'm3u8',
          isHLS: true,
        },
        'low.mp4': { mimetype: 'video/mp4' },
        mp4: { mimetype: 'video/mp4' },
        'high.mp4': { mimetype: 'video/mp4', device: ['Desktop'] },
        webm: { mimetype: 'video/webm' },
        specificRendition: {},
      };
      var extensionToRenditionMap = { m3u8: 'iphone_stream', mp4: 'mp4', webm: 'webm' };
      var renditionsPriority = ['specificRendition', 'high.mp4', 'iphone_stream', 'low.mp4', 'mp4', 'webm'];
      this.disableSupport = function(name) {
        if (supported(name)) {
          delete renditionsMap[name];
        }
        return this;
      };
      this.add = function(name, url) {
        if (supported(name)) {
          renditionsMap[name]['src'] = filterURL(name, url);
        }
        return this;
      };
      this.isDeviceSupported = function(name, device, supportsHLS) {
        var deviceSupported = false;
        if (supported(name)) {
          var rend = renditionsMap[name];
          if (rend.hasOwnProperty('device')) {
            deviceSupported = rend['isHLS']
              ? rend['device'].indexOf(device) != -1 && supportsHLS
              : rend['device'].indexOf(device) != -1;
          } else {
            deviceSupported = true;
          }
        }
        return deviceSupported;
      };
      this.getIterator = function() {
        return new VideoRenditionsIterator(renditionsMap, renditionsPriority);
      };
      function supported(name) {
        return renditionsMap.hasOwnProperty(name);
      }
      function filterURL(name, url) {
        if (renditionsMap.hasOwnProperty(name)) {
          var rendition = renditionsMap[name];
          if (rendition.hasOwnProperty('extension')) {
            url = url.replace('.' + name, '.' + rendition['extension']);
          }
        }
        return url;
      }
      this.hasMimeType = function(name) {
        return renditionsMap[name].hasOwnProperty('mimetype');
      };
      function getMimeTypeFromSource(extension) {
        var renditionInMap = extensionToRenditionMap[extension];
        return renditionsMap[renditionInMap]['mimetype'];
      }
      this.setMimeTypeBySource = function(name, src) {
        var extension = src.substring(src.lastIndexOf('.') + 1);
        if (extensionToRenditionMap.hasOwnProperty(extension)) {
          renditionsMap[name]['mimetype'] = getMimeTypeFromSource(extension);
        }
      };
    }
    var VideoRenditionsIterator = (function() {
      function VideoRenditionsIterator(renditions, order) {
        this.renditions = renditions;
        this.order = order;
        this.current = 0;
      }
      VideoRenditionsIterator.prototype.next = function() {
        var i = this.current;
        var rendWithSrc = null;
        while (i < _.size(this.order) && rendWithSrc === null) {
          var rend = this.renditions[this.order[i]];
          if (_.isObject(rend) && rend.hasOwnProperty('src')) {
            rendWithSrc = rend;
            this.current = i + 1;
          }
          i++;
        }
        return rendWithSrc;
      };
      VideoRenditionsIterator.prototype.reset = function() {
        this.current = 0;
      };
      return VideoRenditionsIterator;
    })();
    return VideoRenditions;
  })();
})(IV);
(function(SCOPE) {
  function renderCloseButton(core) {
    var closeButton = $('<div id="iv-close-btn" />');
    closeButton.on(core.get('mainEngagementEvent'), function(ev) {
      ev.preventDefault();
      core.report.submit({ action: 'close', event_value: 'click' });
      SCOPE.Events.trigger(core.get('id') + ':close');
    });
    core.canvas.addElement(closeButton);
    SCOPE.Events.trigger('closeButtonRendered');
  }
  function unrenderCloseButton() {
    SCOPE.Events.trigger('closeButtonUnrendered');
  }
  SCOPE.Events.on('IRollReady', function(core) {
    var showCloseButton = core.get('CloseButton'),
      waitTillImpression = core.get('CloseButtonWaitToImpression');
    if (showCloseButton || waitTillImpression) {
      SCOPE.Events.trigger('closeButtonEnabled');
      var renderFn;
      if (showCloseButton) {
        renderFn = _.once(renderCloseButton.bind(this, core));
      } else {
        renderFn = unrenderCloseButton;
      }
      var timeout = parseInt(core.get('CloseButtonTimeout'), 10);
      if (isNaN(timeout)) timeout = 0;
      var timer = setTimeout(function() {
        renderFn();
      }, timeout);
      SCOPE.Events.on(core.get('id') + ':ad_started', function() {
        clearTimeout(timer);
        renderFn();
      });
    }
  });
})(IV);
(function(SCOPE) {
  SCOPE.Events.on('videoPlayerReady', function(core, videoPlayer, videoSpy) {
    var elem,
      coreId = core.get('id'),
      enabled = true;
    function buildElem() {
      elem = $("<div class='iv-video-controls' />");
      elem.hide();
      elem.on(core.getVideoClickEventType(), function() {
        videoPlayer.play();
        IV.Events.trigger(coreId + ':video_controls_play');
      });
    }
    function bindEvents() {
      var pauseTimerId = null;
      ['video_play', 'video_ended', 'buffering'].forEach(function(ev) {
        videoSpy.on(ev, function() {
          hideControls();
        });
      });
      videoSpy.on('video_pause', function() {
        showControls();
      });
      ['dialogClosed', 'slateClosed'].forEach(function(ev) {
        IV.Events.on(coreId + ':' + ev, function() {
          enabled = true;
        });
      });
      ['dialogOpened', 'slateOpened'].forEach(function(ev) {
        IV.Events.on(coreId + ':' + ev, function() {
          enabled = false;
        });
      });
      function hideControls() {
        if (pauseTimerId) {
          clearTimeout(pauseTimerId);
          pauseTimerId = null;
        }
        elem.hide();
      }
      function showControls() {
        pauseTimerId = setTimeout(function() {
          if (enabled && !hasVideoEnded()) elem.show();
          pauseTimerId = null;
        }, 500);
      }
    }
    function hasVideoEnded() {
      return videoPlayer.getState() === 'ended';
    }
    if (core.get('showClickToResume') === true) {
      buildElem();
      core.canvas.addResponsiveElement(elem);
      bindEvents();
    }
  });
  SCOPE.Events.on('previewPlayerReady', function(core) {
    var elem = $('<div class="iv-video-controls" />');
    elem.on(core.getVideoClickEventType(), function() {
      IV.Events.trigger(core.get('id') + ':preview_play_click');
      elem.hide();
    });
    $('#iv-iroll').append(elem);
  });
})(IV);
(function(SCOPE) {
  SCOPE.VideoElementWrapper = function(elem) {
    this.elem = elem;
    this.fallbackDuration = 0;
  };
  SCOPE.VideoElementWrapper.prototype.play = function() {
    this.elem.play();
  };
  SCOPE.VideoElementWrapper.prototype.pause = function() {
    this.elem.pause();
  };
  SCOPE.VideoElementWrapper.prototype.getAllSourceChildren = function() {
    return this.elem.children || [];
  };
  SCOPE.VideoElementWrapper.prototype.setSrc = function(src) {
    this.elem.src = src;
  };
  SCOPE.VideoElementWrapper.prototype.hasSrc = function() {
    return !!this.elem.src;
  };
  SCOPE.VideoElementWrapper.prototype.getDuration = function() {
    return isFinite(this.elem.duration) && this.elem.duration > 0 ? this.elem.duration : this.fallbackDuration;
  };
  SCOPE.VideoElementWrapper.prototype.setFallbackDuration = function(fallbackDuration) {
    this.fallbackDuration = fallbackDuration;
  };
  SCOPE.VideoElementWrapper.prototype.getCurrentTime = function() {
    return this.elem.currentTime;
  };
  SCOPE.VideoElementWrapper.prototype.getElem = function() {
    return this.elem;
  };
  SCOPE.VideoElementWrapper.prototype.on = function(event, callback) {
    this.elem.addEventListener(event, callback);
  };
  SCOPE.VideoElementWrapper.prototype.canPlayType = function(mimeType) {
    var canPlay;
    if (this.elem.canPlayType) {
      canPlay = this.elem.canPlayType(mimeType);
    } else {
      var tempVideo = document.createElement('video');
      if (typeof tempVideo.canPlayType === 'function') {
        canPlay = tempVideo.canPlayType(mimeType);
      }
    }
    return canPlay === 'probably' || canPlay === 'maybe';
  };
  SCOPE.VideoElementWrapper.prototype.load = function() {
    if (this.elem.load) {
      this.elem.load();
    }
  };
  SCOPE.VideoElementWrapper.prototype.seekTo = function(secs) {
    this.elem.currentTime = secs;
  };
  SCOPE.VideoElementWrapper.prototype.getVolume = function() {
    if (typeof this.elem.volume !== 'undefined') {
      return this.elem.volume;
    } else {
      return -1;
    }
  };
  SCOPE.VideoElementWrapper.prototype.setVolume = function(val) {
    if (typeof this.elem.volume !== 'undefined') {
      var volumeNum = parseFloat(val);
      if (!isNaN(volumeNum) && volumeNum >= 0 && volumeNum <= 1) {
        this.elem.volume = volumeNum;
      }
    }
  };
  SCOPE.VideoElementWrapper.prototype.exitFullScreen = function() {
    if (this.elem.exitFullscreen) {
      this.elem.exitFullscreen();
    } else if (this.elem.webkitExitFullscreen) {
      this.elem.webkitExitFullscreen();
    }
  };
  SCOPE.VideoElementWrapper.prototype.hasTracks = function() {
    return (
      _.isElement(this.elem) &&
      $(this.elem)
        .find('track')
        .size() > 0
    );
  };
  SCOPE.VideoElementWrapper.prototype.setMute = function(isMuted) {
    this.elem.muted = isMuted;
  };
})(IV);
(function(SCOPE) {
  SCOPE.InternalVideoPlayer = function(core, initialVolume) {
    var elem;
    this.video = null;
    this.core = null;
    this.spy = null;
    this.loaded = false;
    this.everPlayed = false;
    var videoOptions = { preview: false, controls: [], autoplay: true, iroll: core };
    var startMuted = !!core.get('startMuted');
    this.videoContainer = $('<div class="video-container" />');
    var initialVol = _.isUndefined(initialVolume) ? (startMuted ? 0 : 1) : initialVolume;
    this.video = new SCOPE.html5video(videoOptions, this.videoContainer, initialVol);
    elem = new SCOPE.VideoElementWrapper(this.video.el);
    elem.setMute(startMuted);
    this.init = function(data, core) {
      var that = this;
      this.spy = new SCOPE.VideoSpy(elem);
      if (data.customMetricsEnabled) {
        this.spy.setCustomPoint(data.customMetricsTime);
      }
      this.spy.on('all', function(eventName, ev) {
        SCOPE.Events.trigger(core.get('id') + ':' + eventName, ev);
        if (eventName === 'video_short_buffering_time' || eventName === 'video_long_buffering_time') {
          SCOPE.Events.trigger('buffering');
        } else if (eventName !== 'video_timeupdate' && eventName !== 'buffering') {
          SCOPE.Events.trigger('not_buffering');
        }
      });
      this.core = core;
      this.videoContainer.append(this.video.el);
      core.canvas.addElement(this.videoContainer);
      SCOPE.Events.on('video_click', function(ev) {
        that.trigger('interact', ev);
      });
      SCOPE.Events.on('winResize', setSizes.bind(null, this));
      setSizes(this);
      SCOPE.Events.trigger('videoPlayerReady', core, this, this.spy);
    };
    this.loadVideoSource = function(renditionsConfig) {
      this.loaded = this.video.setVideoSource(renditionsConfig);
    };
    var setSizes = function(context) {
      var core = context.core;
      var adSize = core.canvas.getSize();
      context.videoContainer.css({ width: adSize.width, height: adSize.height });
    };
    this.getDuration = function() {
      return this.video.getDuration();
    };
    this.getRemainingTime = function() {
      return this.video.getRemainingTime();
    };
    this.getCurrentTime = function() {
      return this.video.getCurrentTime();
    };
    this.play = function() {
      if (this.loaded) {
        this.video.play();
        this.everPlayed = true;
      } else {
        throw 'Failed to load video';
      }
    };
    this.resume = function() {
      this.video.resume();
    };
    this.pause = function() {
      this.video.pause(true);
    };
    this.getState = function() {
      return this.spy.state;
    };
    this.isPlaying = function() {
      return this.spy.state === 'playing';
    };
    this.isEverPlayed = function() {
      return this.everPlayed;
    };
    this.preparePlay = function() {
      if (!this.everPlayed) {
        this.video.load();
      }
    };
    this.getVolume = function() {
      return elem.getVolume();
    };
    this.setVolume = function(val) {
      elem.setVolume(val);
    };
    this.exitFullScreen = function() {
      elem.exitFullScreen();
    };
  };
  _.extend(SCOPE.InternalVideoPlayer.prototype, Backbone.Events);
})(IV);
(function(SCOPE) {
  SCOPE.SharedVideoPlayer = function(elem) {
    this.spy = null;
    this.active = true;
    this.loaded = false;
    this.elem = elem;
    this.init = function(data, core) {
      var that = this;
      if (!elem instanceof IV.VideoElementWrapper) {
        throw { name: 'TypeError', message: 'elem must be a VideoElementWrapper' };
      }
      if (data.video) {
        elem.setFallbackDuration(data.video.duration);
      }
      this.spy = new SCOPE.VideoSpy(elem);
      this.videoLoader = new SCOPE.VideoSourceLoader(elem, core);
      if (data.customMetricsEnabled) {
        this.spy.setCustomPoint(data.customMetricsTime);
      }
      this.spy.on('all', function(eventName, ev) {
        SCOPE.Events.trigger(core.get('id') + ':' + eventName, ev);
        if (eventName === 'video_short_buffering_time' || eventName === 'video_long_buffering_time') {
          SCOPE.Events.trigger('buffering');
        } else if (eventName !== 'video_timeupdate') {
          SCOPE.Events.trigger('not_buffering');
        }
      });
      var bareElem = elem.getElem();
      if (_.isElement(bareElem)) {
        videoDecorators.applyByVideoId(bareElem.id, bareElem, core);
      }
      SCOPE.Events.on('video_click', function(ev) {
        if (that.active) {
          that.trigger('interact', ev);
        }
      });
      SCOPE.Events.trigger('videoPlayerReady', core, this, this.spy);
    };
    this.loadVideoSource = function(renditionsConfig) {
      this.videoLoader.loadVideoSource(renditionsConfig);
      this.loaded = this.videoLoader.isLoaded();
    };
    this.getCurrentTime = function() {
      return elem.getCurrentTime();
    };
    this.getDuration = function() {
      return elem.getDuration();
    };
    this.getRemainingTime = function() {
      return this.getDuration() - this.getCurrentTime();
    };
    this.play = function() {
      if (this.loaded) {
        elem.play();
      } else {
        throw new Error('Failed to load video');
      }
    };
    this.resume = function() {
      elem.play();
    };
    this.pause = function() {
      elem.pause();
    };
    this.getState = function() {
      return this.spy.state;
    };
    this.isPlaying = function() {
      return this.spy.state === 'playing';
    };
    this.isEverPlayed = function() {
      return true;
    };
    this.preparePlay = function() {};
    this.cleanUp = function() {
      if (this.spy) this.spy.off();
      this.active = false;
    };
    this.getVolume = function() {
      return elem.getVolume();
    };
    this.setVolume = function(val) {
      elem.setVolume(val);
    };
    this.exitFullScreen = function() {
      elem.exitFullScreen();
    };
    var videoDecorators = {
      applyByVideoId: function(videoId, videoElement, iroll) {
        if (this.decorators.hasOwnProperty(videoId)) {
          this.decorators[videoId].call(this, videoElement, iroll);
          SCOPE.Events.on('winResize', this.decorators[videoId].bind(this, videoElement, iroll));
        }
      },
      decorators: {
        fwVPAIDPlayer: function(videoElement, iroll) {
          $(videoElement).attr('webkit-playsinline', 'webkit-playsinline');
          $(videoElement).attr('playsinline', 'playsinline');
          var adSize = iroll.canvas.getSize();
          $(videoElement)
            .css('width', adSize.width || '100%')
            .css('height', adSize.height || '100%');
        },
      },
    };
  };
  _.extend(SCOPE.SharedVideoPlayer.prototype, Backbone.Events);
})(IV);
(function(SCOPE) {
  SCOPE.VideoSourceLoader = function(videoElem, core) {
    var isLoaded = false;
    this.loadVideoSource = function(renditionsConfig) {
      var renditions = new SCOPE.VideoRenditions(),
        foundSuitableSource = false;
      if (!core.get('supportHLS') || videoElem.hasTracks()) {
        renditions.disableSupport('iphone_stream');
      }
      if (SCOPE.InlineVideoValidator.shouldTransformToInlineVideo(SCOPE.device)) {
        renditions.disableSupport('iphone_stream');
      }
      if (_.isObject(renditionsConfig) && _.size(renditionsConfig) > 0) {
        _.each(renditionsConfig, function(src, name) {
          if (renditions.isDeviceSupported(name, SCOPE.device.getDeviceName(), SCOPE.device.isDeviceHLSSupported())) {
            renditions.add(name, src);
            if (!renditions.hasMimeType(name)) {
              renditions.setMimeTypeBySource(name, src);
            }
          }
        });
        var iterator = renditions.getIterator();
        var rend = iterator.next();
        while (rend !== null && foundSuitableSource === false) {
          if (videoElem.canPlayType(rend['mimetype'])) {
            var hadSrc = videoElem.hasSrc();
            videoElem.setSrc(rend['src']);
            if (hadSrc) {
              videoElem.load();
            }
            foundSuitableSource = true;
          } else {
            rend = iterator.next();
          }
        }
        if (!foundSuitableSource) {
          SCOPE.Events.trigger(core.get('id') + ':video_error');
        }
      }
      isLoaded = foundSuitableSource;
    };
    this.isLoaded = function() {
      return isLoaded;
    };
  };
})(IV);
(function(SCOPE) {
  var updateOrientation = function() {
    $('body').attr('orientation', SCOPE.device.getDeviceOrientation());
    SCOPE.Events.trigger('orientationchange');
  };
  $(document).on('ready', function() {
    SCOPE.Events.trigger('domReady');
  });
  $(window).on('load', function() {
    SCOPE.Events.trigger('winLoad');
  });
  $(window).on('resize', function() {
    $('body').attr('orientation', SCOPE.device.getDeviceOrientation());
  });
  window.onorientationchange = updateOrientation;
  SCOPE.enableAnimations = SCOPE.device.supportsAnimations();
  $(function() {
    SCOPE.editingMode = false;
    $('body').css({ margin: 0, padding: 0, border: 0, fontSize: '100%', font: 'inherit', verticalAlign: 'baseline' });
    $('body').attr('orientation', SCOPE.device.getDeviceOrientation());
    $('html')
      .attr('screen-size', SCOPE.device.getDeviceScreenSizeClass())
      .attr('auto-scale', SCOPE.device.getAndroidOSVersion() !== '');
    $('body').on('focus', '.editable', function() {
      SCOPE.editingMode = true;
    });
    $('body').on('blur', '.editable', function() {
      SCOPE.editingMode = false;
    });
  });
})(IV);
var IV;
(function(IV) {
  var BufferingIndicator = (function() {
    function BufferingIndicator(canvas) {
      var _this = this;
      this._canvas = canvas;
      this._bufferIndicator = $('<div class="iv-wrapper"></div>');
      IV.Events.on('buffering', function() {
        _this._bufferIndicator.addClass('iv-buffering');
      });
      IV.Events.on('not_buffering', function() {
        _this._bufferIndicator.removeClass('iv-buffering');
      });
    }
    BufferingIndicator.prototype.add = function() {
      var _this = this;
      this._canvas.addElement(this._bufferIndicator);
      IV.Events.on(
        'winResize',
        _.debounce(function() {
          _this.setSize();
        }, 30)
      );
      IV.Events.on(
        'orientationchange',
        _.debounce(function() {
          _this.setSize();
        }, 30)
      );
      this.setSize();
    };
    BufferingIndicator.prototype.setSize = function() {
      var adSize = this._canvas.getSize();
      this._bufferIndicator.css({
        width: adSize.width,
        height: adSize.height,
        position: 'absolute',
        top: '0em',
        left: '0em',
        overflow: 'hidden',
      });
    };
    return BufferingIndicator;
  })();
  IV.BufferingIndicator = BufferingIndicator;
})(IV || (IV = {}));
var IV;
(function(IV) {
  var PrerollFormat = (function() {
    function PrerollFormat(core) {
      this._core = core;
    }
    PrerollFormat.prototype.start = function() {
      var _this = this;
      var bufferingIndicator = new IV.BufferingIndicator(this._core.canvas);
      IV.Events.on(this._core.get('id') + ':video_ended', function() {
        IV.Events.trigger(_this._core.get('id') + ':ad_ended');
      });
      IV.Events.on(this._core.get('id') + ':video_play', function() {
        var forceImmediateImpression = true;
        IV.Events.trigger(_this._core.get('id') + ':ad_play', !forceImmediateImpression);
      });
      if (this._core.get('displayVideo')) {
        this._core.get('videoPlayer').play();
      }
      bufferingIndicator.add();
      IV.Events.trigger(this._core.get('id') + ':impression', this._core);
    };
    return PrerollFormat;
  })();
  IV.PrerollFormat = PrerollFormat;
})(IV || (IV = {}));
var IV;
(function(IV) {
  var QueryStringReader = (function() {
    function QueryStringReader(tool) {
      if (tool === void 0) {
        tool = IV.toolkit;
      }
      this.DEVICE_ID_PARAM_NAME = 'deviceid';
      this.toolkit = tool;
    }
    QueryStringReader.prototype.getExternalCustomParams = function(currentScript, locationSearch) {
      if (currentScript && currentScript.src) {
        locationSearch = currentScript.src.split('?')[1];
      }
      return this.toolkit.parseQueryString(locationSearch);
    };
    QueryStringReader.prototype.getQueryIvcParam = function(currentScript) {
      if (!currentScript || !currentScript.src || currentScript.src.indexOf('?') < 0) {
        return;
      }
      var locationSearch = currentScript.src.split('?')[1];
      var parsedQueryParams = this.toolkit.parseQueryString(locationSearch);
      if ('ivc' in parsedQueryParams) {
        return encodeURIComponent(parsedQueryParams['ivc']);
      } else {
        return;
      }
    };
    QueryStringReader.prototype.getDeviceIdFromRequest = function(currentScript, locationsSearch) {
      locationsSearch = this.fromCurrentScript(currentScript, locationsSearch);
      var params = this.toolkit.parseQueryString(locationsSearch);
      return this.isDeviceIdValid(params[this.DEVICE_ID_PARAM_NAME]) ? params[this.DEVICE_ID_PARAM_NAME] : undefined;
    };
    QueryStringReader.prototype.fromCurrentScript = function(currentScript, defaultValue) {
      if (currentScript && currentScript.src) {
        var scriptQueryString = currentScript.src.split('?')[1];
        if (scriptQueryString && scriptQueryString.indexOf(this.DEVICE_ID_PARAM_NAME) !== -1) {
          defaultValue = scriptQueryString;
        }
      }
      return defaultValue;
    };
    QueryStringReader.prototype.isDeviceIdValid = function(dId) {
      return dId && dId.length > 0;
    };
    return QueryStringReader;
  })();
  IV.QueryStringReader = QueryStringReader;
})(IV || (IV = {}));
var IV;
(function(IV) {
  var InlineVideoEventRouter = (function() {
    function InlineVideoEventRouter(videoElem) {
      this.videoEventMap = {};
      this.audioTemporaryEventMap = {};
      this.videoElem = videoElem;
      this.audioElem = null;
    }
    Object.defineProperty(InlineVideoEventRouter, 'VIDEO_EVENTS', {
      get: function() {
        return ['playing', 'ended', 'pause', 'play', 'timeupdate', 'durationchange', 'volumechange', 'seeked'];
      },
      enumerable: true,
      configurable: true,
    });
    InlineVideoEventRouter.prototype.setAudioContext = function(audioElem) {
      var _this = this;
      this.audioElem = audioElem;
      _.each(this.audioTemporaryEventMap, function(listeners, type) {
        listeners.forEach(function(listener) {
          _this.audioElem.addEventListener(type, listener.bind(_this.videoElem));
        });
      });
      this.audioTemporaryEventMap = {};
    };
    InlineVideoEventRouter.prototype.route = function(type, listener) {
      if (this.isVideoEvent(type)) {
        if (this.videoEventMap.hasOwnProperty(type)) {
          this.videoEventMap[type].push(listener);
        } else {
          this.videoEventMap[type] = [listener];
        }
      } else if (this.audioElem !== null) {
        this.audioElem.addEventListener(type, listener.bind(this.videoElem));
      } else {
        if (this.audioTemporaryEventMap.hasOwnProperty(type)) {
          this.audioTemporaryEventMap[type].push(listener);
        } else {
          this.audioTemporaryEventMap[type] = [listener];
        }
      }
    };
    InlineVideoEventRouter.prototype.raise = function(type) {
      var _this = this;
      if (this.isVideoEvent(type)) {
        if (this.videoEventMap.hasOwnProperty(type)) {
          var listeners = this.videoEventMap[type];
          listeners.forEach(function(listener) {
            listener.call(_this.videoElem, new Event(type));
          });
        }
      }
    };
    InlineVideoEventRouter.prototype.isVideoEvent = function(type) {
      return _.contains(InlineVideoEventRouter.VIDEO_EVENTS, type);
    };
    return InlineVideoEventRouter;
  })();
  IV.InlineVideoEventRouter = InlineVideoEventRouter;
})(IV || (IV = {}));
var IV;
(function(IV) {
  var InlineVideoFactory = (function() {
    function InlineVideoFactory() {}
    InlineVideoFactory.create = function(videoElem, props) {
      if (props === void 0) {
        props = null;
      }
      if (props === null) {
        props = { autoplayWithoutSound: false, showUnmuteButton: false };
      }
      var router = new IV.InlineVideoEventRouter(videoElem);
      var inlineVideoWrapper = new IV.InlineVideoWrapper(videoElem, router, props, document);
      var renderer = new IV.InlineVideoRenderer(inlineVideoWrapper);
      var transformer = new IV.InlineVideoTransformer(inlineVideoWrapper, renderer);
      transformer.transform();
      return videoElem;
    };
    return InlineVideoFactory;
  })();
  IV.InlineVideoFactory = InlineVideoFactory;
})(IV || (IV = {}));
var IV;
(function(IV) {
  var InlineVideoRenderer = (function() {
    function InlineVideoRenderer(inlineVideo, fps) {
      if (fps === void 0) {
        fps = 25;
      }
      this.inlineVideo = inlineVideo;
      this.canvas = null;
      this.context = null;
      this.lastTimeRendered = 0;
      this.fps = fps;
      this.force = false;
    }
    InlineVideoRenderer.prototype.render = function() {
      var currTime = new Date().getTime();
      if (this.inlineVideo.isVideoDone()) {
        return;
      }
      if (this.inlineVideo.isVideoPaused()) {
        return;
      }
      this.inlineVideo.beforeAnimation();
      if (this.lastTimeRendered === 0) {
        this.lastTimeRendered = currTime;
        this.force = true;
      } else {
        this.force = false;
      }
      var timeToAdd = (currTime - this.lastTimeRendered) / 1000;
      if (this.shouldRender(timeToAdd)) {
        if (this.inlineVideo.isAudioStarted()) {
          this.inlineVideo.syncTimeToAudio();
        } else {
          if (this.inlineVideo.currentTime + timeToAdd > this.inlineVideo.duration) {
            timeToAdd = this.inlineVideo.duration - this.inlineVideo.currentTime;
          }
          this.inlineVideo.updateTime(timeToAdd);
        }
        this.lastTimeRendered = currTime;
      }
      this.inlineVideo.afterAnimation();
      this.drawNextFrame();
    };
    InlineVideoRenderer.prototype.drawNextFrame = function() {
      var _this = this;
      requestAnimationFrame(function() {
        _this.render();
      });
    };
    InlineVideoRenderer.prototype.shouldRender = function(timeToAdd) {
      return this.force ? true : timeToAdd >= 1 / this.fps;
    };
    return InlineVideoRenderer;
  })();
  IV.InlineVideoRenderer = InlineVideoRenderer;
})(IV || (IV = {}));
var IV;
(function(IV) {
  var InlineVideoTransformer = (function() {
    function InlineVideoTransformer(inlineVideo, renderer) {
      this.inlineVideo = inlineVideo;
      this.renderer = renderer;
    }
    InlineVideoTransformer.prototype.transform = function() {
      this.overrideMethods();
      this.overrideProperties();
    };
    InlineVideoTransformer.prototype.startVideoRendering = function() {
      this.renderer.render();
      this.inlineVideo.dispatch('playing');
    };
    InlineVideoTransformer.checkAndOverrideFastSeek = function(videoElem) {
      if (typeof videoElem['fastSeek'] !== 'function') {
        videoElem['fastSeek'] = function(time) {
          videoElem.currentTime = time;
        };
      }
    };
    InlineVideoTransformer.prototype.overrideMethods = function() {
      var _this = this;
      var videoElem = this.inlineVideo.elem;
      videoElem['play'] = function() {
        if (_this.inlineVideo.isVideoPaused()) {
          _this.inlineVideo.resume(function() {
            _this.startVideoRendering();
          });
        } else {
          _this.inlineVideo.play(function() {
            _this.startVideoRendering();
          });
        }
      };
      videoElem['pause'] = function() {
        _this.inlineVideo.pause();
      };
      videoElem['addEventListener'] = function(type, listener) {
        _this.inlineVideo.addEventListener(type, listener);
      };
      videoElem['fastSeek'] = function(time) {
        _this.inlineVideo.setTime(time);
      };
    };
    InlineVideoTransformer.prototype.overrideProperties = function() {
      var _this = this;
      var videoElem = this.inlineVideo.elem;
      Object.defineProperty(videoElem, 'loop', {
        get: function() {
          return _this.inlineVideo.loop;
        },
        set: function(loop) {
          _this.inlineVideo.setLoop(loop);
        },
        enumerable: true,
        configurable: true,
      });
      Object.defineProperty(videoElem, 'volume', {
        get: function() {
          return _this.inlineVideo.volume;
        },
        set: function(vol) {
          _this.inlineVideo.setVolume(vol);
        },
        enumerable: true,
        configurable: true,
      });
      var oldSrc = videoElem.src;
      Object.defineProperty(videoElem, 'src', {
        set: function(newSrc) {
          if (oldSrc !== newSrc) {
            oldSrc = newSrc;
            videoElem.setAttribute('src', newSrc);
            _this.inlineVideo.setSource(newSrc);
          }
        },
        get: function() {
          return oldSrc;
        },
        enumerable: true,
        configurable: true,
      });
      var oldCurrSrc = videoElem.currentSrc;
      Object.defineProperty(videoElem, 'currentSrc', {
        set: function(newCurrSrc) {
          if (oldCurrSrc !== newCurrSrc) {
            oldCurrSrc = newCurrSrc;
            videoElem.setAttribute('currentSrc', newCurrSrc);
            _this.inlineVideo.setSource(newCurrSrc);
          }
        },
        get: function() {
          return oldCurrSrc;
        },
        enumerable: true,
        configurable: true,
      });
    };
    return InlineVideoTransformer;
  })();
  IV.InlineVideoTransformer = InlineVideoTransformer;
})(IV || (IV = {}));
var IV;
(function(IV) {
  var InlineVideoValidator = (function() {
    function InlineVideoValidator() {}
    Object.defineProperty(InlineVideoValidator, 'VALID_DEVICE_NAMES', {
      get: function() {
        return ['iPhone', 'iPod'];
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(InlineVideoValidator, 'VALID_iOS_VERSIONS', {
      get: function() {
        return ['8.', '9.'];
      },
      enumerable: true,
      configurable: true,
    });
    InlineVideoValidator.shouldTransformToInlineVideo = function(deviceInfo, force) {
      if (force === void 0) {
        force = false;
      }
      if (InlineVideoValidator.config === null) {
        InlineVideoValidator.config = window['IV'].baseData.app_data;
      }
      if (force) {
        return true;
      }
      if (
        typeof InlineVideoValidator.config !== 'undefined' &&
        InlineVideoValidator.config.hasOwnProperty('iphone-inline') &&
        InlineVideoValidator.config['iphone-inline'] === false
      ) {
        return false;
      }
      if (typeof deviceInfo === 'undefined') {
        return false;
      }
      return (
        InlineVideoValidator.isMobileBrowserPlatform() &&
        InlineVideoValidator.isIOS(deviceInfo) &&
        InlineVideoValidator.isValidDeviceName(deviceInfo) &&
        InlineVideoValidator.isValidOS(deviceInfo)
      );
    };
    InlineVideoValidator.isValidOS = function(deviceInfo) {
      var valid = false;
      InlineVideoValidator.VALID_iOS_VERSIONS.forEach(function(osVersionPrefix) {
        if (deviceInfo.getiPhoneOSVersion().indexOf(osVersionPrefix) === 0) {
          valid = true;
        }
      });
      return valid;
    };
    InlineVideoValidator.isValidDeviceName = function(deviceInfo) {
      var valid = false;
      InlineVideoValidator.VALID_DEVICE_NAMES.forEach(function(deviceName) {
        if (deviceInfo.getDeviceName() === deviceName) {
          valid = true;
        }
      });
      return valid;
    };
    InlineVideoValidator.isMobileBrowserPlatform = function() {
      if (typeof window['IVAPPS'] !== 'undefined') {
        if (window['IVAPPS'] === window['IV'].default) {
          return true;
        }
      }
      return false;
    };
    InlineVideoValidator.isIOS = function(deviceInfo) {
      return deviceInfo.is_iOS();
    };
    InlineVideoValidator.config = null;
    return InlineVideoValidator;
  })();
  IV.InlineVideoValidator = InlineVideoValidator;
})(IV || (IV = {}));
var IV;
(function(IV) {
  var InlineVideoProperties = (function() {
    function InlineVideoProperties() {
      this.showUnmuteButton = false;
      this.autoplayWithoutSound = false;
    }
    return InlineVideoProperties;
  })();
  IV.InlineVideoProperties = InlineVideoProperties;
  var InlineVideoWrapper = (function() {
    function InlineVideoWrapper(videoElem, router, props, contextDocument) {
      this.videoElem = videoElem;
      this.props = props;
      this.creativeElementsInitialized = false;
      this.audioElem = null;
      this.source = videoElem.src || videoElem.currentSrc;
      this.paused = false;
      this.looped = false;
      this.loaded = false;
      this.ended = false;
      this.audioStarted = false;
      this.currentVolume = 1;
      this.animating = false;
      this.audioPlayListener = null;
      this.router = router;
      this.contextDocument = contextDocument;
      this.bindEvents();
    }
    Object.defineProperty(InlineVideoWrapper, 'UNMUTE_BUTTON_SCALE', {
      get: function() {
        return 0.08;
      },
      enumerable: true,
      configurable: true,
    });
    InlineVideoWrapper.prototype.load = function() {
      if (this.loaded) {
        return;
      }
      if (this.audioElem) {
        this.audioElem.load();
      }
      this.videoElem.load();
      this.videoElem.currentTime = 0;
      this.loaded = true;
      this.initCreativeElements();
    };
    InlineVideoWrapper.prototype.bindEvents = function() {
      var _this = this;
      var hiddenKey = null,
        visibilityChangeEventName = null;
      this.videoElem.addEventListener('loadedmetadata', function() {
        _this.dispatch('durationchange');
      });
      if (typeof this.contextDocument['hidden'] !== 'undefined') {
        hiddenKey = 'hidden';
        visibilityChangeEventName = 'visibilitychange';
      } else if (typeof this.contextDocument['webkitHidden'] !== 'undefined') {
        hiddenKey = 'webkitHidden';
        visibilityChangeEventName = 'webkitvisibilitychange';
      }
      if (hiddenKey !== null) {
        this.contextDocument.addEventListener(visibilityChangeEventName, function() {
          if (_this.contextDocument[hiddenKey] === true) {
            _this.pause();
          }
        });
      }
    };
    InlineVideoWrapper.prototype.initCreativeElements = function() {
      if (!this.creativeElementsInitialized) {
        this.creativeElementsInitialized = true;
        this.hideNativePlayButton();
        this.hideControls();
        if (this.props.showUnmuteButton) {
          this.showUnmuteButton();
        }
      }
    };
    InlineVideoWrapper.prototype.playAudio = function() {
      if (!this.audioElem) {
        this.extractAudioFromVideo();
      }
      if (this.isAudioStarted() && this.paused) {
        this.audioElem.play();
      } else if (!this.isAudioStarted()) {
        this.audioElem.play();
      }
    };
    InlineVideoWrapper.prototype.play = function(renderCallback) {
      if (!this.paused) {
        this.load();
      }
      if (!this.props.autoplayWithoutSound) {
        this.registerToAudioPlayEvent(renderCallback);
        this.playAudio();
      } else {
        renderCallback();
      }
      this.paused = false;
      this.ended = false;
    };
    InlineVideoWrapper.prototype.pause = function() {
      if (this.paused) {
        return;
      }
      this.paused = true;
      if (this.audioElem) {
        this.audioElem.pause();
      }
      this.dispatch('pause');
    };
    InlineVideoWrapper.prototype.resume = function(renderCallback) {
      this.play(renderCallback);
      this.dispatch('play');
    };
    Object.defineProperty(InlineVideoWrapper.prototype, 'loop', {
      get: function() {
        if (this.audioElem) {
          return this.audioElem.loop;
        }
        return this.looped;
      },
      enumerable: true,
      configurable: true,
    });
    InlineVideoWrapper.prototype.setLoop = function(loop) {
      if (this.audioElem) {
        this.audioElem.loop = loop;
      }
      this.looped = loop;
    };
    Object.defineProperty(InlineVideoWrapper.prototype, 'volume', {
      get: function() {
        return this.currentVolume;
      },
      enumerable: true,
      configurable: true,
    });
    InlineVideoWrapper.prototype.setVolume = function(vol) {
      if (this.audioElem) {
        this.audioElem.volume = vol;
      }
      this.currentVolume = vol;
      this.dispatch('volumechange');
    };
    InlineVideoWrapper.prototype.isAudioStarted = function() {
      return this.audioStarted;
    };
    InlineVideoWrapper.prototype.isVideoPaused = function() {
      return this.paused;
    };
    InlineVideoWrapper.prototype.isVideoAlreadyLoaded = function() {
      return this.loaded;
    };
    Object.defineProperty(InlineVideoWrapper.prototype, 'width', {
      get: function() {
        return this.videoElem.width || this.videoElem.offsetWidth;
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(InlineVideoWrapper.prototype, 'height', {
      get: function() {
        return this.videoElem.height || this.videoElem.offsetHeight;
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(InlineVideoWrapper.prototype, 'top', {
      get: function() {
        return this.videoElem.offsetTop;
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(InlineVideoWrapper.prototype, 'left', {
      get: function() {
        return this.videoElem.offsetLeft;
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(InlineVideoWrapper.prototype, 'duration', {
      get: function() {
        return this.videoElem.duration;
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(InlineVideoWrapper.prototype, 'currentTime', {
      get: function() {
        return this.videoElem.currentTime;
      },
      enumerable: true,
      configurable: true,
    });
    InlineVideoWrapper.prototype.syncTimeToAudio = function() {
      this.setTime(this.audioElem.currentTime);
    };
    InlineVideoWrapper.prototype.updateTime = function(timeToAdd) {
      this.setTime(this.videoElem.currentTime + timeToAdd);
    };
    InlineVideoWrapper.prototype.setTime = function(time) {
      if (!this.animating && this.audioElem) {
        this.audioElem.currentTime = time;
      }
      this.videoElem.currentTime = time;
      this.dispatch('timeupdate');
      this.dispatch('seeked');
      if (this.isVideoDone()) {
        this.ended = true;
        this.dispatch('ended');
      }
    };
    InlineVideoWrapper.prototype.beforeAnimation = function() {
      this.animating = true;
    };
    InlineVideoWrapper.prototype.afterAnimation = function() {
      this.animating = false;
    };
    InlineVideoWrapper.prototype.setSource = function(source) {
      this.source = source;
      if (this.audioElem) {
        this.audioElem.src = source;
      }
    };
    Object.defineProperty(InlineVideoWrapper.prototype, 'src', {
      get: function() {
        return this.videoElem.src || this.videoElem.currentSrc;
      },
      enumerable: true,
      configurable: true,
    });
    InlineVideoWrapper.prototype.isVideoDone = function() {
      return (this.ended && !this.loop) || this.videoElem.currentTime >= this.videoElem.duration;
    };
    InlineVideoWrapper.prototype.addEventListener = function(type, listener) {
      this.router.route(type, listener);
    };
    InlineVideoWrapper.prototype.dispatch = function(type) {
      this.router.raise(type);
    };
    Object.defineProperty(InlineVideoWrapper.prototype, 'elem', {
      get: function() {
        return this.videoElem;
      },
      enumerable: true,
      configurable: true,
    });
    InlineVideoWrapper.prototype.extractAudioFromVideo = function() {
      var _this = this;
      this.audioElem = this.contextDocument.createElement('audio');
      this.audioElem.id = 'iv-inline-audio';
      this.audioElem.src = this.source;
      this.audioElem.volume = this.videoElem.volume;
      this.audioElem.loop = this.looped;
      this.audioElem.addEventListener('playing', function() {
        _this.audioStarted = true;
        _this.audioElem.currentTime = _this.videoElem.currentTime;
        if (_this.audioPlayListener) {
          _this.audioPlayListener.call(_this);
        }
      });
      this.router.setAudioContext(this.audioElem);
    };
    InlineVideoWrapper.prototype.hideNativePlayButton = function() {
      var style = this.contextDocument.createElement('style');
      style.innerHTML = 'video::-webkit-media-controls-start-playback-button { display: none; }';
      this.contextDocument.getElementsByTagName('head')[0].appendChild(style);
    };
    InlineVideoWrapper.prototype.hideControls = function() {
      var style = this.contextDocument.createElement('style');
      style.innerHTML = 'video::-webkit-media-controls { display:none !important; }';
      this.contextDocument.getElementsByTagName('head')[0].appendChild(style);
    };
    InlineVideoWrapper.prototype.showUnmuteButton = function() {
      var _this = this;
      var div = this.contextDocument.createElement('div');
      var size = this.width * InlineVideoWrapper.UNMUTE_BUTTON_SCALE;
      div.id = 'iv-inline-unmute-container';
      div.style.width = size + 'px';
      div.style.height = size + 'px';
      div.style.top = this.top + this.height - 5 - size + 'px';
      div.style.left = this.left + 5 + 'px';
      div.style.position = 'absolute';
      div.style.zIndex = '25';
      div.style.backgroundImage = "url('___PATH___/assets/images/ui/unmute-button.png')";
      div.style.backgroundSize = 'cover';
      div.onclick = function() {
        div.style.display = 'none';
        _this.playAudio();
      };
      this.contextDocument.body.appendChild(div);
    };
    InlineVideoWrapper.prototype.registerToAudioPlayEvent = function(renderCallback) {
      this.audioPlayListener = renderCallback;
    };
    return InlineVideoWrapper;
  })();
  IV.InlineVideoWrapper = InlineVideoWrapper;
})(IV || (IV = {}));
var IV;
(function(IV) {
  var IframeInjector = (function() {
    function IframeInjector(id, container, iframeConfig) {
      if (container === void 0) {
        container = null;
      }
      if (iframeConfig === void 0) {
        iframeConfig = null;
      }
      this.container = null;
      this.id = id;
      this.container = container;
      this.iframeConfig = iframeConfig ? iframeConfig : this.getDefaultIframeConfig();
    }
    IframeInjector.prototype.createIframe = function() {
      return document.createElement('IFRAME');
    };
    IframeInjector.prototype.injectIframeIntoDoc = function(targetDoc, createdIframe) {
      if (targetDoc === void 0) {
        targetDoc = null;
      }
      if (createdIframe === void 0) {
        createdIframe = null;
      }
      var ifr = createdIframe ? createdIframe : this.createIframe();
      ifr.id = 'iv-ext-ifr-' + this.id + '-' + new Date().getTime().toString();
      ifr.width = this.iframeConfig.width;
      ifr.height = this.iframeConfig.height;
      ifr.frameBorder = this.iframeConfig.border;
      this.setIframeSpecificAttributes(ifr);
      if (!this.injectIframe(targetDoc, this.container, ifr)) {
        return null;
      }
      return ifr;
    };
    IframeInjector.prototype.injectIframeOnElement = function(container, ifr) {
      if (container) {
        container.appendChild(ifr);
        return true;
      }
      return false;
    };
    IframeInjector.prototype.getDefaultIframeConfig = function() {
      return new IV.IframeConfigBuilder()
        .setWidth('0')
        .setHeight('0')
        .setDisplay('none')
        .setBorder('0')
        .build();
    };
    return IframeInjector;
  })();
  IV.IframeInjector = IframeInjector;
})(IV || (IV = {}));
var __extends =
  (this && this.__extends) ||
  function(d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
  };
var IV;
(function(IV) {
  var FriendlyIframeInjector = (function(_super) {
    __extends(FriendlyIframeInjector, _super);
    function FriendlyIframeInjector() {
      _super.apply(this, arguments);
    }
    FriendlyIframeInjector.prototype.injectIframe = function(targetDoc, container, ifr) {
      return this.injectIframeOnElement(targetDoc.body, ifr) || this.injectIframeOnElement(container, ifr);
    };
    FriendlyIframeInjector.prototype.setIframeSpecificAttributes = function(ifr) {
      ifr.style.display = this.iframeConfig.display;
    };
    return FriendlyIframeInjector;
  })(IV.IframeInjector);
  IV.FriendlyIframeInjector = FriendlyIframeInjector;
})(IV || (IV = {}));
var IV;
(function(IV) {
  var IframeConfig = (function() {
    function IframeConfig(builder) {
      this._width = builder.width;
      this._height = builder.height;
      this._display = builder.display;
      this._border = builder.border;
      this._src = builder.src;
      this._zIndex = builder.zIndex;
      this._position = builder.position;
      this._left = builder.left;
      this._top = builder.top;
      this._visibility = builder.visibility;
    }
    Object.defineProperty(IframeConfig.prototype, 'width', {
      get: function() {
        return this._width;
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(IframeConfig.prototype, 'height', {
      get: function() {
        return this._height;
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(IframeConfig.prototype, 'display', {
      get: function() {
        return this._display;
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(IframeConfig.prototype, 'border', {
      get: function() {
        return this._border;
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(IframeConfig.prototype, 'src', {
      get: function() {
        return this._src;
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(IframeConfig.prototype, 'zIndex', {
      get: function() {
        return this._zIndex;
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(IframeConfig.prototype, 'position', {
      get: function() {
        return this._position;
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(IframeConfig.prototype, 'left', {
      get: function() {
        return this._left;
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(IframeConfig.prototype, 'top', {
      get: function() {
        return this._top;
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(IframeConfig.prototype, 'visibility', {
      get: function() {
        return this._visibility;
      },
      enumerable: true,
      configurable: true,
    });
    return IframeConfig;
  })();
  IV.IframeConfig = IframeConfig;
})(IV || (IV = {}));
var IV;
(function(IV) {
  var IframeConfigBuilder = (function() {
    function IframeConfigBuilder() {}
    Object.defineProperty(IframeConfigBuilder.prototype, 'width', {
      get: function() {
        return this._width;
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(IframeConfigBuilder.prototype, 'height', {
      get: function() {
        return this._height;
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(IframeConfigBuilder.prototype, 'display', {
      get: function() {
        return this._display;
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(IframeConfigBuilder.prototype, 'zIndex', {
      get: function() {
        return this._zIndex;
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(IframeConfigBuilder.prototype, 'border', {
      get: function() {
        return this._border;
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(IframeConfigBuilder.prototype, 'src', {
      get: function() {
        return this._src;
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(IframeConfigBuilder.prototype, 'position', {
      get: function() {
        return this._position;
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(IframeConfigBuilder.prototype, 'left', {
      get: function() {
        return this._left;
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(IframeConfigBuilder.prototype, 'top', {
      get: function() {
        return this._top;
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(IframeConfigBuilder.prototype, 'visibility', {
      get: function() {
        return this._visibility;
      },
      enumerable: true,
      configurable: true,
    });
    IframeConfigBuilder.prototype.setWidth = function(value) {
      this._width = value;
      return this;
    };
    IframeConfigBuilder.prototype.setHeight = function(value) {
      this._height = value;
      return this;
    };
    IframeConfigBuilder.prototype.setDisplay = function(value) {
      this._display = value;
      return this;
    };
    IframeConfigBuilder.prototype.setZIndex = function(value) {
      this._zIndex = value;
      return this;
    };
    IframeConfigBuilder.prototype.setPosition = function(value) {
      this._position = value;
      return this;
    };
    IframeConfigBuilder.prototype.setLeft = function(value) {
      this._left = value;
      return this;
    };
    IframeConfigBuilder.prototype.setTop = function(value) {
      this._top = value;
      return this;
    };
    IframeConfigBuilder.prototype.setBorder = function(value) {
      this._border = value;
      return this;
    };
    IframeConfigBuilder.prototype.setSrc = function(value) {
      this._src = value;
      return this;
    };
    IframeConfigBuilder.prototype.setVisibility = function(value) {
      this._visibility = value;
      return this;
    };
    IframeConfigBuilder.prototype.build = function() {
      return new IV.IframeConfig(this);
    };
    return IframeConfigBuilder;
  })();
  IV.IframeConfigBuilder = IframeConfigBuilder;
})(IV || (IV = {}));
var __extends =
  (this && this.__extends) ||
  function(d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
  };
var IV;
(function(IV) {
  var NonFriendlyIframeInjector = (function(_super) {
    __extends(NonFriendlyIframeInjector, _super);
    function NonFriendlyIframeInjector() {
      _super.apply(this, arguments);
    }
    NonFriendlyIframeInjector.prototype.injectIframe = function(targetDoc, container, ifr) {
      return this.injectIframeOnElement(container, ifr);
    };
    NonFriendlyIframeInjector.prototype.setIframeSpecificAttributes = function(ifr) {
      ifr.src = this.iframeConfig.src;
      ifr.style.zIndex = this.iframeConfig.zIndex;
      ifr.style.position = this.iframeConfig.position;
      ifr.style.left = this.iframeConfig.left;
      ifr.style.top = this.iframeConfig.top;
      ifr.style.visibility = this.iframeConfig.visibility;
    };
    return NonFriendlyIframeInjector;
  })(IV.IframeInjector);
  IV.NonFriendlyIframeInjector = NonFriendlyIframeInjector;
})(IV || (IV = {}));
(function(SCOPE) {
  var format;
  SCOPE.Events.on('IRollInit', function(core) {
    format = new SCOPE.PrerollFormat(core);
  });
  SCOPE.Events.on('IRollReady', function() {
    if (format) {
      format.start();
    } else {
      throw new ReferenceError('format not initialized');
    }
  });
})(IV);
var VPAIDAd = function() {
  this.irollAd = null;
  this.width = 0;
  this.height = 0;
  this.initialWidth = 0;
  this.initialHeight = 0;
  this.slot = null;
  this.videoSlot = null;
  this.videoSlotCanAutoPlay = false;
  this.callbacks = {};
  this.adDuration = -2;
  this.adRemainingTime = -2;
  this.adExpanded = false;
  this.AD_STOP_DELAY_TIME_MS = 200;
  this._stopped = false;
  this._volume = -1;
  this.loggedEvents = [];
  this.adStoppableState = false;
  this._verificationBlockingHandler = null;
  this._adCompletionHandler = null;
  this.viewMode = '';
  this._actionsHandler = null;
};
VPAIDAd.prototype.initAd = function(width, height, viewMode, desiredBitrate, creativeData, environmentVars) {
  var that = this,
    initAdStartTime = new Date().getTime(),
    doneWaitingForBlockingDecisionOrTimeout = false;
  this.initialWidth = this.width = this._dimToNum(width);
  this.initialHeight = this.height = this._dimToNum(height);
  this.viewMode = viewMode;
  this.irollAd = this._createIrollAd();
  this._prepareEnvironmentVars(environmentVars);
  this._adCompletionHandler = new IV.VpaidAdCompletionHandler(this.irollAd.report);
  this._verificationBlockingHandler = new IV.VerificationNonBlockingHandler();
  this._actionsHandler = new IV.ActionsHandler();
  var fireAdLoadedOnce = _.once(function() {
    var totalInitAdTime = new Date().getTime() - initAdStartTime;
    that.irollAd.report.reportLog({ event_id: 'vpaid-init-ad-total-time', event_value: totalInitAdTime.toString() });
    setTimeout(function() {
      that._fire('AdLoaded');
    }, 0);
  });
  this._prepareVideoPlayer(this.videoSlot);
  this._prepareCreativeData(creativeData, this.slot, this.videoSlot);
  IV.Events.on(this.irollAd.get('id') + ':core_initialized', function() {
    if (doneWaitingForBlockingDecisionOrTimeout) {
      fireAdLoadedOnce();
    }
  });
  IV.vpaidExtensions.execute(IV.vpaidExtensions.EXTENSION_POINTS.BEFORE_AD_LOAD, this);
  setTimeout(function() {
    that.irollAd.trigger('init');
    that.irollAd.injectCSSToDoc();
  }, 0);
  this._verificationBlockingHandler.waitForBlockingDecisionOrTimeout(function() {
    doneWaitingForBlockingDecisionOrTimeout = true;
    if (that.irollAd.get('initialized')) {
      fireAdLoadedOnce();
    }
  });
};
VPAIDAd.prototype.handshakeVersion = function() {
  return '2.0';
};
VPAIDAd.prototype.startAd = function() {
  var that = this;
  this.irollAd.report.reportLog({ event_id: 'vpaid-start-ad' });
  this._verificationBlockingHandler.notifyAdStarted();
  if (this._verificationBlockingHandler.shouldBlockAd()) {
    this._fire('AdStarted');
    this.stopAd();
  } else {
    IV.vpaidExtensions.execute(IV.vpaidExtensions.EXTENSION_POINTS.BEFORE_AD_START, this);
    this._mapIRollEventsToVPAID();
    this._fire('AdStarted');
    this._actionsHandler.waitForActions('before_ad_start', function() {
      that.irollAd.trigger('start');
    });
  }
};
VPAIDAd.prototype.stopAd = function() {
  var that = this;
  this._cleanAdResources(function() {
    that._fire('AdStopped');
  });
};
VPAIDAd.prototype.resizeAd = function(width, height, viewMode) {
  this.width = this._dimToNum(width);
  this.height = this._dimToNum(height);
  this.viewMode = viewMode;
  if (!!this.slot) {
    this._fixAdSlotDimensions(this.slot, this.height, this.width);
  }
  IV.Events.trigger('winResize');
  this._fire('AdSizeChange');
};
VPAIDAd.prototype.pauseAd = function() {
  this.irollAd.get('videoPlayer').pause();
  this._fire('AdPaused');
};
VPAIDAd.prototype.resumeAd = function() {
  if (!this.adExpanded) {
    this.irollAd.get('videoPlayer').play();
  }
  this._fire('AdPlaying');
};
VPAIDAd.prototype.expandAd = function() {};
VPAIDAd.prototype.collapseAd = function() {
  if (this.adExpanded) {
    IV.Events.trigger('closeSlates');
  }
};
VPAIDAd.prototype.skipAd = function() {
  var that = this;
  this._cleanAdResources(function() {
    that._fire('AdSkipped');
    that._fire('AdStopped');
  });
};
VPAIDAd.prototype.subscribe = function(aCallback, eventName, aContext) {
  this._subscribe(aCallback, eventName, aContext, false, 'VPAID_Internal');
};
VPAIDAd.prototype.safeSubscribe = function(aCallback, eventName, aContext, moduleName) {
  this._subscribe(aCallback, eventName, aContext, true, moduleName);
};
VPAIDAd.prototype.unsubscribe = function(aCallback, eventName) {
  if (this.callbacks.hasOwnProperty(eventName) && typeof this.callbacks[eventName] !== 'undefined') {
    this.callbacks[eventName] = _.filter(this.callbacks[eventName], function(cb) {
      return cb.callback !== aCallback;
    });
  }
};
VPAIDAd.prototype.getAdExpanded = function() {
  return this.adExpanded;
};
VPAIDAd.prototype.getAdSize = function() {
  return { width: this.width, height: this.height };
};
VPAIDAd.prototype.getAdSkippableState = function() {
  return true;
};
VPAIDAd.prototype.getAdWidth = function() {
  return this.width;
};
VPAIDAd.prototype.getAdHeight = function() {
  return this.height;
};
VPAIDAd.prototype.getAdCompanions = function() {
  return '';
};
VPAIDAd.prototype.getAdIcons = function() {
  return false;
};
VPAIDAd.prototype.getAdLinear = function() {
  return true;
};
VPAIDAd.prototype.setAdVolume = function(vol) {
  if (vol !== this._volume) {
    this.irollAd.get('videoPlayer').setVolume(vol);
    this._volume = vol;
    this._fire('AdVolumeChange');
    IV.Events.trigger('volumechange', vol);
  }
};
VPAIDAd.prototype.getAdVolume = function() {
  var vol = this.irollAd.get('videoPlayer').getVolume();
  if (vol === -1) {
    vol = this._volume;
  }
  return vol;
};
VPAIDAd.prototype.getAdDuration = function() {
  return this.adDuration;
};
VPAIDAd.prototype.getAdRemainingTime = function() {
  return this.adRemainingTime;
};
VPAIDAd.prototype.getAdStoppableState = function() {
  return this.adStoppableState;
};
VPAIDAd.prototype._subscribe = function(aCallback, eventName, aContext, handleErrors, moduleName) {
  var fns = this.callbacks[eventName];
  if (!fns) {
    fns = [];
    this.callbacks[eventName] = fns;
  }
  fns.push({ callback: aCallback, context: aContext, handleErrors: handleErrors, module: moduleName });
};
VPAIDAd.prototype._cleanAdResources = function(callback) {
  var that = this;
  if (!this._stopped) {
    setTimeout(function() {
      that.irollAd.cleanUp();
      callback();
    }, this.AD_STOP_DELAY_TIME_MS);
    this._stopped = true;
    IV.vpaidExtensions.execute(IV.vpaidExtensions.EXTENSION_POINTS.CLEAN_UP, this);
  }
};
VPAIDAd.prototype._fire = function(eventName) {
  var props = Array.prototype.slice.call(arguments, 1);
  var that = this;
  IV.toolkit.debug('VPAID Event -', eventName, props);
  var callbacks = this.callbacks[eventName] || [];
  callbacks.forEach(function(cb) {
    var scope = null;
    if (typeof cb.context !== 'undefined') {
      scope = cb.context;
    }
    if (cb.handleErrors) {
      try {
        cb.callback.apply(scope, props);
      } catch (e) {
        IV.Events.trigger(that.irollAd.get('id') + ':ad_interface_error', cb.module, e);
      }
    } else {
      cb.callback.apply(scope, props);
    }
  });
  this.loggedEvents.push(eventName);
};
VPAIDAd.prototype._prepareEnvironmentVars = function(environmentVars) {
  if (typeof environmentVars !== 'undefined') {
    if (environmentVars.hasOwnProperty('slot')) {
      this.slot = environmentVars.slot;
      this._fixAdSlotDimensions(this.slot, this.initialHeight, this.initialWidth);
    }
    if (environmentVars.hasOwnProperty('videoSlot') && !this.irollAd.shouldForceInternalPlayer()) {
      this.videoSlot = environmentVars.videoSlot;
    }
    if (environmentVars.hasOwnProperty('videoSlotCanAutoPlay')) {
      this.videoSlotCanAutoPlay = environmentVars.videoSlotCanAutoPlay;
    }
  }
};
VPAIDAd.prototype._createIrollAd = function() {
  return new IV.AppsCore({
    data: IV.baseData.app_data,
    config: IV.baseData.config_data,
    interface: this,
    delayAppVisibility: false,
    showClickToResume: true,
    BackButton: true,
    mainEngagementEvent: 'click',
    checkForVisibility: false,
  });
};
VPAIDAd.prototype._prepareVideoPlayer = function(videoSlot) {
  if (videoSlot !== null) {
    var elementWrapper = new IV.VideoElementWrapper(videoSlot);
    var videoPlayer = new IV.SharedVideoPlayer(elementWrapper);
    this.irollAd.setAttribute({ videoPlayer: videoPlayer });
  } else {
    this.irollAd.setAttribute({ videoPlayer: new IV.InternalVideoPlayer(this.irollAd, this._volume) });
  }
};
VPAIDAd.prototype._prepareCreativeData = function(creativeData, adSlot, videoSlot) {
  if (typeof creativeSettings !== 'undefined') {
    this.irollAd.setAttribute(creativeSettings);
  }
  if (typeof creativeData !== 'undefined') {
    var creativeParams = this._parseCreativeParams(creativeData);
    this.irollAd.setAttribute(creativeParams);
  }
  if (adSlot !== null) {
    this.irollAd.setAttribute({ mainContainer: adSlot });
  }
  if (videoSlot !== null) {
    this.irollAd.setAttribute({ videoContainer: videoSlot });
  }
};
VPAIDAd.prototype._setAdDuration = function(duration) {
  this.adDuration = duration;
};
VPAIDAd.prototype._setAdRemainingTime = function(time) {
  this.adRemainingTime = time;
};
VPAIDAd.prototype._mapIRollEventsToVPAID = function() {
  var id = this.irollAd.get('id'),
    vpaidAd = this,
    irollAd = this.irollAd;
  IV.Events.on(id + ':ad_started', function() {
    vpaidAd._fire('AdImpression');
    vpaidAd._fire('AdVideoStart');
  });
  IV.Events.on(id + ':video_videoPassed25', function() {
    vpaidAd._fire('AdVideoFirstQuartile');
  });
  IV.Events.on(id + ':video_videoPassed50', function() {
    vpaidAd._fire('AdVideoMidpoint');
  });
  IV.Events.on(id + ':video_videoPassed75', function() {
    vpaidAd._fire('AdVideoThirdQuartile');
  });
  IV.Events.on(id + ':video_timeupdate', function() {
    vpaidAd._setAdRemainingTime(irollAd.get('videoPlayer').getRemainingTime());
  });
  [id + ':video_started', id + ':video_durationchange'].forEach(function(eventName) {
    IV.Events.on(eventName, function() {
      var duration = irollAd.get('videoPlayer').getDuration();
      if (duration > 0 && duration !== vpaidAd.getAdDuration()) {
        vpaidAd._setAdDuration(duration);
        vpaidAd._setAdRemainingTime(duration);
        vpaidAd._fire('AdDurationChange');
      }
    });
  });
  IV.Events.on(id + ':video_ended', function() {
    vpaidAd._fire('AdVideoComplete');
    vpaidAd.adStoppableState = true;
    vpaidAd._fire('AdStoppableStateChange');
  });
  IV.Events.on(id + ':ad_ended', function() {
    vpaidAd._actionsHandler.waitForActions('before_ad_end', function() {
      vpaidAd._adCompletionHandler.waitForCompletionPixelToBeLoaded(function() {
        vpaidAd.stopAd();
      });
    });
  });
  IV.Events.on(id + ':skip', function() {
    vpaidAd.skipAd();
  });
  IV.Events.on(id + ':close', function() {
    vpaidAd.stopAd();
  });
  IV.Events.on(id + ':openUrl', function(url) {
    var playerHandles = vpaidAd._shouldPlayerHandleClickthru();
    IV.Events.trigger(id + ':vpaid_clickthru', playerHandles);
    vpaidAd._fire('AdClickThru', url, null, playerHandles);
    vpaidAd._fire('AdPaused');
    if (!playerHandles) {
      window.open(url, '_blank');
    }
  });
  IV.Events.on(id + ':userClick', function() {
    vpaidAd._fire('AdInteraction');
  });
  IV.Events.on(id + ':dialogOpened', function() {
    vpaidAd.adExpanded = true;
    vpaidAd._fire('AdPaused');
    vpaidAd._fire('AdExpandedChange');
  });
  IV.Events.on(id + ':dialogClosed', function() {
    vpaidAd.adExpanded = false;
    vpaidAd._fire('AdExpandedChange');
    vpaidAd._fire('AdPlaying');
  });
  ['slateOpened', 'surveyOpened'].forEach(function(ev) {
    IV.Events.on(id + ':' + ev, function() {
      vpaidAd.adExpanded = true;
      if (!vpaidAd.getAdStoppableState()) {
        vpaidAd._fire('AdPaused');
      }
      vpaidAd._fire('AdExpandedChange');
    });
  });
  ['slateClosed', 'surveyClosed'].forEach(function(ev) {
    IV.Events.on(id + ':' + ev, function() {
      vpaidAd.adExpanded = false;
      vpaidAd._fire('AdExpandedChange');
      vpaidAd._fire('AdPlaying');
    });
  });
  IV.Events.on(id + ':video_error', function() {
    setTimeout(function() {
      vpaidAd.irollAd.cleanUp();
      vpaidAd._fire('AdError');
    }, vpaidAd.AD_STOP_DELAY_TIME_MS);
  });
  IV.Events.on(id + ':video_controls_play', function() {
    vpaidAd._fire('AdPlaying');
  });
};
VPAIDAd.prototype._parseCreativeParams = function(creativeData) {
  function _str2bool(str) {
    return str == 'true' ? true : str == 'false' ? false : str;
  }
  var createDataObj = {};
  var creativeDataString = '';
  if (creativeData) {
    if (creativeData.hasOwnProperty('AdParameters') && typeof creativeData.AdParameters === 'string') {
      creativeDataString = creativeData.AdParameters;
    } else if (typeof creativeData === 'string') {
      creativeDataString = creativeData;
    }
    _.each(creativeDataString.split(';'), function(param) {
      var parts = param.split('=');
      if (parts.length == 2) {
        createDataObj[parts[0]] = _str2bool(parts[1]);
      }
    });
  }
  return createDataObj;
};
VPAIDAd.prototype._dimToNum = function(dim) {
  return Number(dim) || 0;
};
VPAIDAd.prototype._fixAdSlotDimensions = function(slot, height, width) {
  if (typeof slot.style !== 'undefined') {
    if ($(slot).height() === 0) {
      $(slot).height(height);
    }
    if ($(slot).width() === 0) {
      $(slot).width(width);
    }
  }
};
VPAIDAd.prototype._overrideVerificationBlockingHandlerAndStartTimer = function(handler) {
  this._verificationBlockingHandler = handler;
  handler.startTimeoutTimer();
};
VPAIDAd.prototype._shouldPlayerHandleClickthru = function() {
  return (
    this.irollAd.inAppDetector.isInApp() ||
    !IV.FeatureBitsResolver.isEnabled(
      IV.FeatureBitsResolver.FEATURE_NAMES.VPAID_CLKTRU_HANDLE_BY_INNOVID_FOR_NON_IN_APP
    )
  );
};
VPAIDAd.prototype.updateExternalMacros = function(keyValueQuery) {
  if (typeof keyValueQuery === 'string') {
    keyValueQuery = IV.toolkit.parseQueryString(keyValueQuery);
  }
  var that = this;
  _.each(keyValueQuery, function(value, key) {
    value = decodeURIComponent(value);
    that.irollAd.macroMapper.addOrUpdateMacro(key, value);
  });
};
(function(SCOPE) {
  SCOPE.VPAIDExtensions = function() {
    var extensions = {};
    this.EXTENSION_POINTS = { BEFORE_AD_LOAD: 1, BEFORE_AD_START: 2, CLEAN_UP: 3 };
    this.PRIORTIES = { LOW: 1, HIGH: 2, MONITOR: 3 };
    this.PRIORITY_ORDER = [this.PRIORTIES.LOW, this.PRIORTIES.HIGH, this.PRIORTIES.MONITOR];
    this.register = function(func, extensionPoint, priority) {
      if (typeof priority === 'undefined') {
        priority = this.PRIORTIES.LOW;
      }
      if (!extensions.hasOwnProperty(extensionPoint)) {
        extensions[extensionPoint] = {};
        _.each(this.PRIORTIES, function(val) {
          extensions[extensionPoint][val] = [];
        });
      }
      extensions[extensionPoint][priority].push(func);
    };
    this.unregisterAll = function() {
      extensions = {};
    };
    this.execute = function(extPoint, context) {
      if (extensions.hasOwnProperty(extPoint)) {
        _.each(this.PRIORITY_ORDER, function(pr) {
          _.each(extensions[extPoint][pr], function(func) {
            func.call(this, context);
          });
        });
      }
    };
  };
  SCOPE.vpaidExtensions = new SCOPE.VPAIDExtensions();
})(IV);
(function(SCOPE) {
  SCOPE.VPAIDAdProxy = function(vpaidAd) {
    var wrapAndLogWithArgs = function(func, funcName) {
      return function() {
        func.apply(vpaidAd, arguments);
        SCOPE.toolkit.debug('VPAID method -', funcName, '(', Array.prototype.slice.call(arguments), ')');
      };
    };
    var wrapAndLogReturnValue = function(func, funcName) {
      return function() {
        var returnValue = func.apply(vpaidAd, arguments);
        SCOPE.toolkit.debug('VPAID method -', funcName, '(', returnValue, ')');
        return returnValue;
      };
    };
    var vpaidSpec = {
      initAd: wrapAndLogWithArgs(vpaidAd.initAd, 'initAd'),
      handshakeVersion: vpaidAd.handshakeVersion.bind(vpaidAd),
      startAd: wrapAndLogWithArgs(vpaidAd.startAd, 'startAd'),
      stopAd: wrapAndLogWithArgs(vpaidAd.stopAd, 'stopAd'),
      pauseAd: wrapAndLogWithArgs(vpaidAd.pauseAd, 'pauseAd'),
      resumeAd: wrapAndLogWithArgs(vpaidAd.resumeAd, 'resumeAd'),
      resizeAd: wrapAndLogWithArgs(vpaidAd.resizeAd, 'resizeAd'),
      expandAd: wrapAndLogWithArgs(vpaidAd.expandAd, 'expandAd'),
      collapseAd: wrapAndLogWithArgs(vpaidAd.collapseAd, 'collapseAd'),
      skipAd: wrapAndLogWithArgs(vpaidAd.skipAd, 'skipAd'),
      subscribe: vpaidAd.subscribe.bind(vpaidAd),
      unsubscribe: vpaidAd.unsubscribe.bind(vpaidAd),
      updateExternalMacros: wrapAndLogWithArgs(vpaidAd.updateExternalMacros, 'updateExternalMacros'),
      getAdExpanded: wrapAndLogReturnValue(vpaidAd.getAdExpanded, 'getAdExpanded'),
      getAdSkippableState: wrapAndLogReturnValue(vpaidAd.getAdSkippableState, 'getAdSkippableState'),
      getAdWidth: wrapAndLogReturnValue(vpaidAd.getAdWidth, 'getAdWidth'),
      getAdHeight: wrapAndLogReturnValue(vpaidAd.getAdHeight, 'getAdHeight'),
      getAdCompanions: wrapAndLogReturnValue(vpaidAd.getAdCompanions, 'getAdCompanions'),
      getAdIcons: wrapAndLogReturnValue(vpaidAd.getAdIcons, 'getAdIcons'),
      getAdLinear: wrapAndLogReturnValue(vpaidAd.getAdLinear, 'getAdLinear'),
      getAdVolume: wrapAndLogReturnValue(vpaidAd.getAdVolume, 'getAdVolume'),
      getAdDuration: wrapAndLogReturnValue(vpaidAd.getAdDuration, 'getAdDuration'),
      getAdRemainingTime: wrapAndLogReturnValue(vpaidAd.getAdRemainingTime, 'getAdRemainingTime'),
      getAdStoppableState: wrapAndLogReturnValue(vpaidAd.getAdStoppableState, 'getAdStoppableState'),
      setAdVolume: wrapAndLogWithArgs(vpaidAd.setAdVolume, 'setAdVolume'),
    };
    return vpaidSpec;
  };
})(IV);
var getVPAIDAd = (function() {
  var vpaidAdProxy = IV.VPAIDAdProxy(new VPAIDAd());
  return function() {
    return vpaidAdProxy;
  };
})();
(function(SCOPE) {
  SCOPE.vpaidExtensions.register(function VPAIDFullScreenDetection(vpaidAd) {
    var doc = vpaidAd.slot.ownerDocument,
      videoSlot = vpaidAd.videoSlot,
      _isFullScreen = false;
    function toggleFullScreen(isFullScreen) {
      _isFullScreen = isFullScreen;
      if (isFullScreen) {
        if (screen.width > 0 && screen.height > 0) {
          vpaidAd.resizeAd(screen.width, screen.height);
        }
      } else {
        vpaidAd.resizeAd(vpaidAd.initialWidth, vpaidAd.initialHeight);
      }
    }
    $(doc)
      .on('fullscreenchange', function() {
        toggleFullScreen(doc['fullscreen']);
      })
      .on('mozfullscreenchange', function() {
        toggleFullScreen(doc['mozFullScreen']);
      })
      .on('webkitfullscreenchange', function() {
        toggleFullScreen(doc['webkitIsFullScreen']);
      })
      .on('MSFullscreenChange', function() {
        toggleFullScreen(!!doc['msFullscreenElement']);
      });
    $(videoSlot)
      .on('webkitbeginfullscreen', function() {
        toggleFullScreen(true);
      })
      .on('webkitendfullscreen', function() {
        toggleFullScreen(false);
      });
    var view = doc.parentWindow || doc.defaultView;
    $(view).on('orientationchange', function() {
      setTimeout(function() {
        if (_isFullScreen) {
          vpaidAd.resizeAd($(view).width(), $(view).height());
        }
      }, 300);
    });
  }, SCOPE.vpaidExtensions.EXTENSION_POINTS.BEFORE_AD_START);
})(IV);
(function(SCOPE) {
  SCOPE.vpaidExtensions.register(function(vpaidAd) {
    var pausedCB = function() {
      vpaidAd.irollAd.trigger('playButtonStateChanged', 'paused');
    };
    var playedCB = function() {
      vpaidAd.irollAd.trigger('playButtonStateChanged', 'played');
    };
    vpaidAd.subscribe(playedCB, 'AdStarted');
    vpaidAd.subscribe(pausedCB, 'AdPaused');
    vpaidAd.subscribe(playedCB, 'AdPlaying');
    vpaidAd.subscribe(pausedCB, 'AdStopped');
  }, SCOPE.vpaidExtensions.EXTENSION_POINTS.BEFORE_AD_LOAD);
})(IV);
var IV;
(function(IV) {
  var VpaidPixelLoadedHandler = (function() {
    function VpaidPixelLoadedHandler(actionName) {
      this.pixelFired = false;
      this.actionName = actionName;
    }
    VpaidPixelLoadedHandler.prototype.waitForPixelToFire = function(firedCb) {
      if (firedCb) {
        this.firedCb = _.once(firedCb);
        if (this.pixelFired) {
          this.firedCb();
        }
      }
    };
    VpaidPixelLoadedHandler.prototype.postFiredPixel = function() {
      this.pixelFired = this.wasPixelFired();
      if (this.pixelFired) {
        if (this.firedCb) {
          this.firedCb();
        }
      }
    };
    return VpaidPixelLoadedHandler;
  })();
  IV.VpaidPixelLoadedHandler = VpaidPixelLoadedHandler;
})(IV || (IV = {}));
var __extends =
  (this && this.__extends) ||
  function(d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
  };
var IV;
(function(IV) {
  var VpaidAdCompletionHandler = (function(_super) {
    __extends(VpaidAdCompletionHandler, _super);
    function VpaidAdCompletionHandler(irollReporter) {
      var _this = this;
      _super.call(this, VpaidAdCompletionHandler.QUARTILES_ACTION_NAME);
      this.timerId = null;
      this.irollReporter = irollReporter;
      this.irollReporter.addPostLoadedPixelCallback(function() {
        return _this.postFiredPixel();
      }, VpaidAdCompletionHandler.QUARTILES_ACTION_NAME);
    }
    Object.defineProperty(VpaidAdCompletionHandler, 'COMPLETION_PIXEL_TIMEOUT_MS', {
      get: function() {
        return 1000;
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(VpaidAdCompletionHandler, 'COMPLETION_TIMEOUT_EVENT_ID', {
      get: function() {
        return 'vpaid-completion-pixel-timeout';
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(VpaidAdCompletionHandler, 'QUARTILES_ACTION_NAME', {
      get: function() {
        return 'vpoint';
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(VpaidAdCompletionHandler, 'QUARTILES_EVENT_ID', {
      get: function() {
        return 'percent';
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(VpaidAdCompletionHandler, 'COMPLETION_PIXEL_OPTIONS', {
      get: function() {
        return {
          action: VpaidAdCompletionHandler.QUARTILES_ACTION_NAME,
          event_id: VpaidAdCompletionHandler.QUARTILES_EVENT_ID,
          event_value: 100,
        };
      },
      enumerable: true,
      configurable: true,
    });
    VpaidAdCompletionHandler.prototype.postFiredPixel = function() {
      if (this.wasPixelFired() && this.timerId) {
        clearTimeout(this.timerId);
        this.timerId = null;
      }
      _super.prototype.postFiredPixel.call(this);
    };
    VpaidAdCompletionHandler.prototype.wasPixelFired = function() {
      return this.irollReporter.wasPixelLoaded(VpaidAdCompletionHandler.COMPLETION_PIXEL_OPTIONS);
    };
    VpaidAdCompletionHandler.prototype.waitForCompletionPixelToBeLoaded = function(loadedCb) {
      var _this = this;
      this.waitForPixelToFire(loadedCb);
      if (!this.pixelFired) {
        this.timerId = setTimeout(function() {
          if (!_this.pixelFired) {
            _this.timerId = null;
            _this.irollReporter.reportLog({
              event_id: VpaidAdCompletionHandler.COMPLETION_TIMEOUT_EVENT_ID,
              event_value: VpaidAdCompletionHandler.COMPLETION_PIXEL_TIMEOUT_MS.toString(),
            });
          }
          loadedCb();
        }, VpaidAdCompletionHandler.COMPLETION_PIXEL_TIMEOUT_MS);
      }
    };
    return VpaidAdCompletionHandler;
  })(IV.VpaidPixelLoadedHandler);
  IV.VpaidAdCompletionHandler = VpaidAdCompletionHandler;
})(IV || (IV = {}));
var IV;
(function(IV) {
  var VerificationNonBlockingHandler = (function() {
    function VerificationNonBlockingHandler() {}
    VerificationNonBlockingHandler.prototype.waitForBlockingDecisionOrTimeout = function(postWaitCallback) {
      postWaitCallback();
    };
    VerificationNonBlockingHandler.prototype.shouldBlockAd = function() {
      return false;
    };
    VerificationNonBlockingHandler.prototype.notifyAdStarted = function() {};
    VerificationNonBlockingHandler.prototype.startTimeoutTimer = function() {};
    return VerificationNonBlockingHandler;
  })();
  IV.VerificationNonBlockingHandler = VerificationNonBlockingHandler;
})(IV || (IV = {}));
var IV;
(function(IV) {
  var ActionsHandler = (function() {
    function ActionsHandler() {
      this.eventHandlers = {};
    }
    ActionsHandler.prototype.addHandler = function(eventType, handler) {
      if (this.eventHandlers.hasOwnProperty(eventType)) {
        this.eventHandlers[eventType].push(handler);
      } else {
        this.eventHandlers[eventType] = [handler];
      }
    };
    ActionsHandler.prototype.waitForActions = function(eventType, callback) {
      if (this.eventHandlers.hasOwnProperty(eventType) && this.eventHandlers[eventType].length > 0) {
        var handlers = this.eventHandlers[eventType];
        var afterCallback = _.after(handlers.length, callback);
        handlers.forEach(function(handler) {
          handler.waitForAction(afterCallback);
        });
      } else {
        callback();
      }
    };
    return ActionsHandler;
  })();
  IV.ActionsHandler = ActionsHandler;
})(IV || (IV = {}));
(function(SCOPE) {
  SCOPE.VPAIDAdWrapper = function(vpaidAd, moduleName) {
    this.handshakeVersion = function() {
      return vpaidAd.handshakeVersion();
    };
    this.subscribe = function(aCallback, eventName, aContext) {
      if (typeof aContext === 'undefined') aContext = this;
      vpaidAd.safeSubscribe(aCallback, eventName, aContext, moduleName);
    };
    this.unsubscribe = function(aCallback, eventName) {
      vpaidAd.unsubscribe(aCallback, eventName);
    };
    this.getAdExpanded = function() {
      return vpaidAd.getAdExpanded();
    };
    this.getAdSize = function() {
      return vpaidAd.getAdSize();
    };
    this.getAdSkippableState = function() {
      return vpaidAd.getAdSkippableState();
    };
    this.getAdWidth = function() {
      return vpaidAd.getAdWidth();
    };
    this.getAdHeight = function() {
      return vpaidAd.getAdHeight();
    };
    this.getAdCompanions = function() {
      return vpaidAd.getAdCompanions();
    };
    this.getAdIcons = function() {
      return vpaidAd.getAdIcons();
    };
    this.getAdLinear = function() {
      return vpaidAd.getAdLinear();
    };
    this.getAdVolume = function() {
      return vpaidAd.getAdVolume();
    };
    this.getAdDuration = function() {
      return vpaidAd.getAdDuration();
    };
    this.getAdRemainingTime = function() {
      return vpaidAd.getAdRemainingTime();
    };
    this.getPlayer = function() {
      var player = vpaidAd.videoSlot;
      return _.isElement(player) ? player : null;
    };
    this.getSlot = function() {
      return vpaidAd.slot;
    };
    this.getPreviousEvents = function() {
      return vpaidAd.loggedEvents;
    };
    this.getViewMode = function() {
      return vpaidAd.viewMode;
    };
  };
})(IV);
var IV;
(function(IV) {
  var IntegrationDiagnosticReporter = (function() {
    function IntegrationDiagnosticReporter(reporter) {
      this.entries = {};
      this.reporter = reporter;
    }
    IntegrationDiagnosticReporter.prototype.addDiagnosticPixel = function(integrationName, eventName, templateUrl) {
      if (!this.entries.hasOwnProperty(integrationName)) {
        this.entries[integrationName] = {};
      }
      if (!this.entries[integrationName].hasOwnProperty(eventName)) {
        this.entries[integrationName][eventName] = [];
      }
      this.entries[integrationName][eventName].push(_.template(templateUrl));
    };
    IntegrationDiagnosticReporter.prototype.reportDiagnosticEvent = function(
      integrationName,
      eventName,
      templateValues
    ) {
      var _this = this;
      if (this.entries.hasOwnProperty(integrationName) && this.entries[integrationName].hasOwnProperty(eventName)) {
        this.entries[integrationName][eventName].forEach(function(compiledUrl) {
          var url = compiledUrl(templateValues);
          _this.reporter.firePixel(url);
        });
      }
    };
    return IntegrationDiagnosticReporter;
  })();
  IV.IntegrationDiagnosticReporter = IntegrationDiagnosticReporter;
})(IV || (IV = {}));
var IV;
(function(IV) {
  var IframeInjection = (function() {
    function IframeInjection() {}
    IframeInjection.prototype.setInjection = function(fn) {
      this.injectionFn = fn;
    };
    IframeInjection.prototype.onTimeout = function(fn) {
      this.timeoutCb = fn;
    };
    IframeInjection.prototype.onInjection = function(fn) {
      this.injectCb = fn;
    };
    IframeInjection.prototype.inject = function() {
      if (this.injectCb) {
        this.injectCb();
      }
      if (this.injectionFn) {
        return this.injectionFn();
      } else {
        return null;
      }
    };
    IframeInjection.prototype.timeout = function() {
      this.timeoutCb && this.timeoutCb();
    };
    return IframeInjection;
  })();
  IV.IframeInjection = IframeInjection;
})(IV || (IV = {}));
var IV;
(function(IV) {
  var IframeIntegrationLoader = (function() {
    function IframeIntegrationLoader(vpaidWrapper, irollReporter, iframeInjector) {
      this.scriptLoaded = false;
      this.integrationTimeoutTimerId = null;
      this.irollReporter = irollReporter;
      this.vpaidWrapper = vpaidWrapper;
      this.iframeInjector = iframeInjector;
      this.randomIframeContextName = this.generateRandomIframeContextName();
    }
    Object.defineProperty(IframeIntegrationLoader, 'MONITORING_LOAD_TIMEOUT_MS', {
      get: function() {
        return 5000;
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(IframeIntegrationLoader, 'SCRIPT_STATE', {
      get: function() {
        return { READY: 'READY', NOT_READY: 'NOT READY' };
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(IframeIntegrationLoader, 'INTEGRATION_CALLBACK_NAME', {
      get: function() {
        return 'ivOnIntegrationReady';
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(IframeIntegrationLoader, 'IFRAME_CONTEXT_NAME', {
      get: function() {
        return 'ivIfrIntCtxObj';
      },
      enumerable: true,
      configurable: true,
    });
    IframeIntegrationLoader.prototype.load = function(targetWindow, injectionContext) {
      var _this = this;
      this.injection = injectionContext;
      this.vpaidWrapper.subscribe(function() {
        _this.adImpression();
      }, 'AdImpression');
      var injectedIframe = this.iframeInjector.injectIframeIntoDoc(targetWindow.document);
      this.injection.onTimeout(function() {
        _this.reportTimeoutError();
      });
      this.integrationTimeoutTimerId = setTimeout(function() {
        _this.injection.timeout();
      }, IframeIntegrationLoader.MONITORING_LOAD_TIMEOUT_MS);
      this.injection.onInjection(function() {
        _this.stopTimeoutTimer();
        _this.scriptLoaded = true;
      });
      if (injectedIframe) {
        this.writeContentIntoIframe(targetWindow, injectedIframe);
      }
    };
    IframeIntegrationLoader.prototype.writeContentIntoIframe = function(targetWindow, injectedIframe) {
      var content = this.buildInjectionContent(targetWindow);
      var ifrWin = injectedIframe.contentWindow;
      var ifrDoc = ifrWin.document;
      ifrDoc.open();
      ifrWin[this.randomIframeContextName] = targetWindow;
      ifrDoc.write(content);
      ifrDoc.close();
    };
    IframeIntegrationLoader.prototype.reportTimeoutError = function() {
      this.irollReporter.reportLog({
        event_id: this.timeoutErrorEventId(),
        event_value: IframeIntegrationLoader.MONITORING_LOAD_TIMEOUT_MS.toString(),
      });
    };
    IframeIntegrationLoader.prototype.isScriptLoaded = function() {
      return this.scriptLoaded;
    };
    IframeIntegrationLoader.prototype.adImpression = function() {
      var evtValue = this.isScriptLoaded()
        ? IframeIntegrationLoader.SCRIPT_STATE.READY
        : IframeIntegrationLoader.SCRIPT_STATE.NOT_READY;
      this.irollReporter.reportLog({ event_id: this.impressionEventId(), event_value: evtValue });
    };
    IframeIntegrationLoader.prototype.generateRandomIframeContextName = function() {
      var randomNumber = Math.floor(Math.random() * Math.pow(10, 9));
      return IframeIntegrationLoader.IFRAME_CONTEXT_NAME + '_' + randomNumber.toString(10);
    };
    IframeIntegrationLoader.prototype.stopTimeoutTimer = function() {
      if (this.integrationTimeoutTimerId) {
        clearTimeout(this.integrationTimeoutTimerId);
      }
    };
    return IframeIntegrationLoader;
  })();
  IV.IframeIntegrationLoader = IframeIntegrationLoader;
})(IV || (IV = {}));
var IV;
(function(IV) {
  var VpaidEvents = (function() {
    function VpaidEvents() {}
    Object.defineProperty(VpaidEvents, 'AD_LOADED', {
      get: function() {
        return 'AdLoaded';
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(VpaidEvents, 'AD_STARTED', {
      get: function() {
        return 'AdStarted';
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(VpaidEvents, 'AD_STOPPED', {
      get: function() {
        return 'AdStopped';
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(VpaidEvents, 'AD_SKIPPED', {
      get: function() {
        return 'AdSkipped';
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(VpaidEvents, 'AD_SKIPPABLE_CHANGE', {
      get: function() {
        return 'AdSkippableStateChange';
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(VpaidEvents, 'AD_DURATION_CHANGE', {
      get: function() {
        return 'AdDurationChange';
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(VpaidEvents, 'AD_VOLUME_CHANGE', {
      get: function() {
        return 'AdVolumeChange';
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(VpaidEvents, 'AD_IMPRESSION', {
      get: function() {
        return 'AdImpression';
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(VpaidEvents, 'AD_VIDEO_START', {
      get: function() {
        return 'AdVideoStart';
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(VpaidEvents, 'AD_VIDEO_FIRST_QUARTILE', {
      get: function() {
        return 'AdVideoFirstQuartile';
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(VpaidEvents, 'AD_VIDEO_MIDPOINT', {
      get: function() {
        return 'AdVideoMidpoint';
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(VpaidEvents, 'AD_VIDEO_THIRD_QUARTILE', {
      get: function() {
        return 'AdVideoThirdQuartile';
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(VpaidEvents, 'AD_VIDEO_COMPLETE', {
      get: function() {
        return 'AdVideoComplete';
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(VpaidEvents, 'AD_CLICK_THRU', {
      get: function() {
        return 'AdClickThru';
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(VpaidEvents, 'AD_PAUSED', {
      get: function() {
        return 'AdPaused';
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(VpaidEvents, 'AD_PLAYING', {
      get: function() {
        return 'AdPlaying';
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(VpaidEvents, 'AD_ERROR', {
      get: function() {
        return 'AdError';
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(VpaidEvents, 'AD_SIZE_CHANGE', {
      get: function() {
        return 'AdSizeChange';
      },
      enumerable: true,
      configurable: true,
    });
    return VpaidEvents;
  })();
  IV.VpaidEvents = VpaidEvents;
})(IV || (IV = {}));
var IV;
(function(IV) {
  var IasConfigComposer = (function() {
    function IasConfigComposer(sessionId) {
      this.sessionId = sessionId;
    }
    Object.defineProperty(IasConfigComposer, 'IAS_NODE_NAME', {
      get: function() {
        return 'integral';
      },
      enumerable: true,
      configurable: true,
    });
    IasConfigComposer.prototype.compose = function(adConfig) {
      var placementConfig = adConfig.app_data['placement-config'];
      var iasConfig = adConfig.app_data['service-config'][IasConfigComposer.IAS_NODE_NAME];
      return {
        partner: iasConfig['partner'],
        advEntityId: iasConfig['adv_entity_id'],
        pubEntityId: iasConfig['pub_entity_id'],
        creativeId: placementConfig['placement-hash'],
        campId: placementConfig['campaign-id'],
        placementId: placementConfig['placements-group-id'],
        impId: this.sessionId,
        debug: { enabled: false },
      };
    };
    return IasConfigComposer;
  })();
  IV.IasConfigComposer = IasConfigComposer;
})(IV || (IV = {}));
var IV;
(function(IV) {
  var IasInstanceProxy = (function() {
    function IasInstanceProxy(fwConfig, adNode, iasInstance) {
      this.initStartTime = 0;
      this.totalTimeToDecision = 0;
      this.fwConfig = fwConfig;
      this.adNode = adNode;
      this.iasInstance = iasInstance;
    }
    Object.defineProperty(IasInstanceProxy, 'IAS_INSTANCE_CLASS_NAME', {
      get: function() {
        return '__IASVANS';
      },
      enumerable: true,
      configurable: true,
    });
    IasInstanceProxy.prototype.initFW = function(blockingCb) {
      var _this = this;
      if (typeof this.iasInstance === 'undefined' || this.iasInstance === null) {
        this.iasInstance = new IV[IasInstanceProxy.IAS_INSTANCE_CLASS_NAME]();
      }
      this.initStartTime = new Date().getTime();
      this.iasInstance.initFW(this.fwConfig, this.adNode, function(result) {
        _this.calculateTotalTimeToDecision();
        blockingCb(result);
      });
    };
    IasInstanceProxy.prototype.sendEvent = function(eventName, params) {
      this.iasInstance.sendEvent(eventName, params);
    };
    IasInstanceProxy.prototype.getTotalTimeToDecision = function() {
      if (this.totalTimeToDecision === 0) {
        this.calculateTotalTimeToDecision();
      }
      return this.totalTimeToDecision;
    };
    IasInstanceProxy.prototype.calculateTotalTimeToDecision = function() {
      this.totalTimeToDecision = new Date().getTime() - this.initStartTime;
    };
    return IasInstanceProxy;
  })();
  IV.IasInstanceProxy = IasInstanceProxy;
})(IV || (IV = {}));
var __extends =
  (this && this.__extends) ||
  function(d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
  };
var IV;
(function(IV) {
  var IasIntegrationDiagnosticReporter = (function(_super) {
    __extends(IasIntegrationDiagnosticReporter, _super);
    function IasIntegrationDiagnosticReporter(reporter, moduleName, config) {
      _super.call(this, reporter);
      this.moduleName = moduleName;
      this.config = config;
      this.registerDiagnosticEvents();
    }
    Object.defineProperty(IasIntegrationDiagnosticReporter, 'INIT_EVENT_CODE', {
      get: function() {
        return 'inn_init';
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(IasIntegrationDiagnosticReporter, 'IMPRESSION_EVENT_CODE', {
      get: function() {
        return 'inn_ai';
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(IasIntegrationDiagnosticReporter, 'MONITOR_PARAMS_ARRAY', {
      get: function() {
        return [{ DOMAIN: 'https://spixel.adsafeprotected.com', AN_ID: '10173' }];
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(IasIntegrationDiagnosticReporter, 'VANS_VERSION_NUMBER', {
      get: function() {
        return '3.5.0';
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(IasIntegrationDiagnosticReporter, 'BASE_TEMPLATE_URL', {
      get: function() {
        return '<%= DOMAIN %>/mon?anId=<%= AN_ID %>';
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(IasIntegrationDiagnosticReporter, 'TEMPLATE_PARAMS', {
      get: function() {
        return (
          '&campId=innovid&' +
          'pubId=<%= EVENT_CODE %>&' +
          'planId=<%= ADV_ENTITY_ID %>&' +
          'placementId=<%= PUB_ENTITY_ID %>&' +
          'advId=<%= INNOVID_CAMPAIGN_ID %>&' +
          'pubOrder=<%= INNOVID_PLACEMENT_ID %>&' +
          'pubCreative=<%= INNOVID_CREATIVE_ID %>&' +
          'impId=<%= INNOVID_SESSION_ID %>&' +
          'ts=<%= TIMESTAMP %>&' +
          'custom=<%= VANS_VERSION_NUMBER %>&' +
          'custom2=jv3&' +
          'adsafe_par'
        );
      },
      enumerable: true,
      configurable: true,
    });
    IasIntegrationDiagnosticReporter.prototype.registerDiagnosticEvents = function() {
      var _this = this;
      IasIntegrationDiagnosticReporter.MONITOR_PARAMS_ARRAY.forEach(function(monitorParams) {
        var compiledTemplate = _.template(IasIntegrationDiagnosticReporter.BASE_TEMPLATE_URL);
        var templateUrl = compiledTemplate(monitorParams);
        _this.addDiagnosticPixel(
          _this.moduleName,
          IasIntegrationDiagnosticReporter.INIT_EVENT_CODE,
          templateUrl + IasIntegrationDiagnosticReporter.TEMPLATE_PARAMS
        );
        _this.addDiagnosticPixel(
          _this.moduleName,
          IasIntegrationDiagnosticReporter.IMPRESSION_EVENT_CODE,
          templateUrl + IasIntegrationDiagnosticReporter.TEMPLATE_PARAMS
        );
      });
    };
    IasIntegrationDiagnosticReporter.prototype.reportEvent = function(eventName) {
      var availableEventNames = [
        IasIntegrationDiagnosticReporter.INIT_EVENT_CODE,
        IasIntegrationDiagnosticReporter.IMPRESSION_EVENT_CODE,
      ];
      if (_.contains(availableEventNames, eventName)) {
        var data = {
          EVENT_CODE: eventName,
          ADV_ENTITY_ID: this.config.advEntityId,
          PUB_ENTITY_ID: this.config.pubEntityId,
          INNOVID_CAMPAIGN_ID: this.config.campId,
          INNOVID_PLACEMENT_ID: this.config.placementId,
          INNOVID_CREATIVE_ID: this.config.creativeId,
          INNOVID_SESSION_ID: this.config.impId,
          TIMESTAMP: new Date().getTime().toString(10),
          VANS_VERSION_NUMBER: IasIntegrationDiagnosticReporter.VANS_VERSION_NUMBER,
        };
        this.reportDiagnosticEvent(this.moduleName, eventName, data);
      }
    };
    return IasIntegrationDiagnosticReporter;
  })(IV.IntegrationDiagnosticReporter);
  IV.IasIntegrationDiagnosticReporter = IasIntegrationDiagnosticReporter;
})(IV || (IV = {}));
var __extends =
  (this && this.__extends) ||
  function(d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
  };
var IV;
(function(IV) {
  var IasIntegrationLoader = (function(_super) {
    __extends(IasIntegrationLoader, _super);
    function IasIntegrationLoader(vpaidWrapper, irollReporter, iframeInjector, iasRunner, diagnosticReporter) {
      _super.call(this, vpaidWrapper, irollReporter, iframeInjector);
      this.iasRunner = iasRunner;
    }
    Object.defineProperty(IasIntegrationLoader, 'IMPRESSION_EVENT_NAME', {
      get: function() {
        return 'ias-impression';
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(IasIntegrationLoader, 'TIMEOUT_ERROR_EVENT_ID', {
      get: function() {
        return 'ias-not-loaded';
      },
      enumerable: true,
      configurable: true,
    });
    IasIntegrationLoader.prototype.buildInjectionContent = function(targetWindow) {
      var _this = this;
      this.injection.setInjection(function() {
        return _this.iasRunner;
      });
      targetWindow[IasIntegrationLoader.INTEGRATION_CALLBACK_NAME] = function() {
        return _this.injection.inject();
      };
      return (
        '\n<body onload="start()">\n    <script>\n        function start() {\n            var runner = ' +
        this.randomIframeContextName +
        '.' +
        IasIntegrationLoader.INTEGRATION_CALLBACK_NAME +
        '();\n            runner.run();\n        }\n    </script>\n</body>'
      );
    };
    IasIntegrationLoader.prototype.timeoutErrorEventId = function() {
      return IasIntegrationLoader.TIMEOUT_ERROR_EVENT_ID;
    };
    IasIntegrationLoader.prototype.impressionEventId = function() {
      return IasIntegrationLoader.IMPRESSION_EVENT_NAME;
    };
    return IasIntegrationLoader;
  })(IV.IframeIntegrationLoader);
  IV.IasIntegrationLoader = IasIntegrationLoader;
})(IV || (IV = {}));
var IV;
(function(IV) {
  var IasIntegrationRunner = (function() {
    function IasIntegrationRunner(vpaidEventsHandler, blockingHandler, reporter, diagnosticReporter, iasInstanceProxy) {
      this.vpaidEventsHandler = vpaidEventsHandler;
      this.blockingHandler = blockingHandler;
      this.reporter = reporter;
      this.diagnosticReporter = diagnosticReporter;
      this.iasInstanceProxy = iasInstanceProxy;
    }
    Object.defineProperty(IasIntegrationRunner, 'INIT_EVENT_NAME', {
      get: function() {
        return 'ias-init-fw';
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(IasIntegrationRunner, 'INIT_RESULT', {
      get: function() {
        return { SUCCESS: 'succeed', FAIL: 'failed' };
      },
      enumerable: true,
      configurable: true,
    });
    IasIntegrationRunner.prototype.run = function() {
      var _this = this;
      try {
        this.vpaidEventsHandler.startListening(this.iasInstanceProxy, this.blockingHandler);
        this.iasInstanceProxy.initFW(function(result) {
          return _this.blockingHandler.onDecisionMade(result);
        });
        this.reportInitFwSuccess(true);
      } catch (e) {
        this.reportInitFwSuccess(false, e.message);
      }
    };
    IasIntegrationRunner.prototype.reportInitFwSuccess = function(success, value) {
      this.diagnosticReporter.reportEvent(IV.IasIntegrationDiagnosticReporter.INIT_EVENT_CODE);
      this.reporter.reportLog({
        event_id: IasIntegrationRunner.INIT_EVENT_NAME,
        event_value: success
          ? IasIntegrationRunner.INIT_RESULT.SUCCESS
          : IasIntegrationRunner.INIT_RESULT.FAIL + ': ' + value,
      });
    };
    return IasIntegrationRunner;
  })();
  IV.IasIntegrationRunner = IasIntegrationRunner;
})(IV || (IV = {}));
var IV;
(function(IV) {
  var IasVpaidEventsHandler = (function() {
    function IasVpaidEventsHandler(vpaidWrapper, reporter, diagnosticReporter) {
      this.sendImpressionOnce = function() {};
      this.vpaidWrapper = vpaidWrapper;
      this.reporter = reporter;
      this.diagnosticReporter = diagnosticReporter;
    }
    Object.defineProperty(IasVpaidEventsHandler, 'IAS_SEND_EVENT_ERROR', {
      get: function() {
        return 'ias-send-event-error';
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(IasVpaidEventsHandler, 'IAS_IMPRESSION_INTEGRAL_DID_BLOCK_VALUE', {
      get: function() {
        return 'ias-integral_didBlock-value';
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(IasVpaidEventsHandler, 'IAS_IMPRESSION_INTEGRAL_TIME_TO_DECISION_VALUE', {
      get: function() {
        return 'ias-integral_timeToDecision-value';
      },
      enumerable: true,
      configurable: true,
    });
    IasVpaidEventsHandler.prototype.startListening = function(iasInstanceProxy, iasBlockingHandler) {
      var _this = this;
      this.iasInstanceProxy = iasInstanceProxy;
      this.iasBlockingHandler = iasBlockingHandler;
      this.sendImpressionOnce = _.once(function() {
        var params = {
          volume: _this.getVolume(),
          ad_duration: _this.getDuration(),
          integral_didBlock: _this.iasBlockingHandler.wasDecisionUsedAndWasBlock(),
          integral_timeToDecision: _this.iasInstanceProxy.getTotalTimeToDecision(),
        };
        _this.sendEvent(IV.VpaidEvents.AD_IMPRESSION, params);
        _this.diagnosticReporter.reportEvent(IV.IasIntegrationDiagnosticReporter.IMPRESSION_EVENT_CODE);
        _this.reporter.reportLog({
          event_id: IasVpaidEventsHandler.IAS_IMPRESSION_INTEGRAL_DID_BLOCK_VALUE,
          event_value: _this.iasBlockingHandler.wasDecisionUsedAndWasBlock().toString(),
        });
        _this.reporter.reportLog({
          event_id: IasVpaidEventsHandler.IAS_IMPRESSION_INTEGRAL_TIME_TO_DECISION_VALUE,
          event_value: _this.iasInstanceProxy.getTotalTimeToDecision().toString(),
        });
      });
      this.vpaidWrapper.subscribe(function() {
        return _this.adLoaded();
      }, IV.VpaidEvents.AD_LOADED);
      this.vpaidWrapper.subscribe(function() {
        return _this.adStarted();
      }, IV.VpaidEvents.AD_STARTED);
      this.vpaidWrapper.subscribe(function() {
        return _this.adStopped();
      }, IV.VpaidEvents.AD_STOPPED);
      this.vpaidWrapper.subscribe(function() {
        return _this.adSkipped();
      }, IV.VpaidEvents.AD_SKIPPED);
      this.vpaidWrapper.subscribe(function() {
        return _this.adSkippableStateChange();
      }, IV.VpaidEvents.AD_SKIPPABLE_CHANGE);
      this.vpaidWrapper.subscribe(function() {
        return _this.adDurationChange();
      }, IV.VpaidEvents.AD_DURATION_CHANGE);
      this.vpaidWrapper.subscribe(function() {
        return _this.adVolumeChange();
      }, IV.VpaidEvents.AD_VOLUME_CHANGE);
      this.vpaidWrapper.subscribe(function() {
        return _this.adImpression();
      }, IV.VpaidEvents.AD_IMPRESSION);
      this.vpaidWrapper.subscribe(function() {
        return _this.adVideoStart();
      }, IV.VpaidEvents.AD_VIDEO_START);
      this.vpaidWrapper.subscribe(function() {
        return _this.adVideoFirstQuartile();
      }, IV.VpaidEvents.AD_VIDEO_FIRST_QUARTILE);
      this.vpaidWrapper.subscribe(function() {
        return _this.adVideoMidpoint();
      }, IV.VpaidEvents.AD_VIDEO_MIDPOINT);
      this.vpaidWrapper.subscribe(function() {
        return _this.adVideoThirdQuartile();
      }, IV.VpaidEvents.AD_VIDEO_THIRD_QUARTILE);
      this.vpaidWrapper.subscribe(function() {
        return _this.adVideoComplete();
      }, IV.VpaidEvents.AD_VIDEO_COMPLETE);
      this.vpaidWrapper.subscribe(function(url, id, playerHandles) {
        return _this.adClickThru(url, id, playerHandles);
      }, IV.VpaidEvents.AD_CLICK_THRU);
      this.vpaidWrapper.subscribe(function() {
        return _this.adPaused();
      }, IV.VpaidEvents.AD_PAUSED);
      this.vpaidWrapper.subscribe(function() {
        return _this.adPlaying();
      }, IV.VpaidEvents.AD_PLAYING);
      this.vpaidWrapper.subscribe(function() {
        return _this.adError();
      }, IV.VpaidEvents.AD_ERROR);
      this.vpaidWrapper.subscribe(function() {
        return _this.adSizeChange();
      }, IV.VpaidEvents.AD_SIZE_CHANGE);
    };
    IasVpaidEventsHandler.prototype.adLoaded = function() {
      this.sendPureEvent(IV.VpaidEvents.AD_LOADED);
    };
    IasVpaidEventsHandler.prototype.adStarted = function() {
      this.sendPureEvent(IV.VpaidEvents.AD_STARTED);
    };
    IasVpaidEventsHandler.prototype.adStopped = function() {
      this.sendPureEvent(IV.VpaidEvents.AD_STOPPED);
    };
    IasVpaidEventsHandler.prototype.adSkipped = function() {
      this.sendPureEvent(IV.VpaidEvents.AD_SKIPPED);
    };
    IasVpaidEventsHandler.prototype.adSkippableStateChange = function() {
      this.sendPureEvent(IV.VpaidEvents.AD_SKIPPABLE_CHANGE);
    };
    IasVpaidEventsHandler.prototype.adDurationChange = function() {
      this.sendPureEvent(IV.VpaidEvents.AD_DURATION_CHANGE);
    };
    IasVpaidEventsHandler.prototype.adVolumeChange = function() {
      this.sendPureEvent(IV.VpaidEvents.AD_VOLUME_CHANGE);
    };
    IasVpaidEventsHandler.prototype.adImpression = function() {
      this.sendImpressionEvent();
    };
    IasVpaidEventsHandler.prototype.adVideoStart = function() {
      this.sendPureEvent(IV.VpaidEvents.AD_VIDEO_START);
    };
    IasVpaidEventsHandler.prototype.adVideoFirstQuartile = function() {
      this.sendPureEvent(IV.VpaidEvents.AD_VIDEO_FIRST_QUARTILE);
    };
    IasVpaidEventsHandler.prototype.adVideoMidpoint = function() {
      this.sendPureEvent(IV.VpaidEvents.AD_VIDEO_MIDPOINT);
    };
    IasVpaidEventsHandler.prototype.adVideoThirdQuartile = function() {
      this.sendPureEvent(IV.VpaidEvents.AD_VIDEO_THIRD_QUARTILE);
    };
    IasVpaidEventsHandler.prototype.adVideoComplete = function() {
      this.sendPureEvent(IV.VpaidEvents.AD_VIDEO_COMPLETE);
    };
    IasVpaidEventsHandler.prototype.adClickThru = function(url, id, playerHandles) {
      this.sendClickThruEvent(url, id, playerHandles);
    };
    IasVpaidEventsHandler.prototype.adPaused = function() {
      this.sendPureEvent(IV.VpaidEvents.AD_PAUSED);
    };
    IasVpaidEventsHandler.prototype.adPlaying = function() {
      this.sendPureEvent(IV.VpaidEvents.AD_PLAYING);
    };
    IasVpaidEventsHandler.prototype.adError = function() {
      this.sendPureEvent(IV.VpaidEvents.AD_ERROR);
    };
    IasVpaidEventsHandler.prototype.adSizeChange = function() {
      this.sendAdSizeChangeEvent();
    };
    IasVpaidEventsHandler.prototype.getVolume = function() {
      return this.vpaidWrapper.getAdVolume();
    };
    IasVpaidEventsHandler.prototype.getDuration = function() {
      return this.vpaidWrapper.getAdDuration();
    };
    IasVpaidEventsHandler.prototype.getWidth = function() {
      return this.vpaidWrapper.getAdWidth();
    };
    IasVpaidEventsHandler.prototype.getHeight = function() {
      return this.vpaidWrapper.getAdHeight();
    };
    IasVpaidEventsHandler.prototype.sendImpressionEvent = function() {
      this.sendImpressionOnce();
    };
    IasVpaidEventsHandler.prototype.sendClickThruEvent = function(url, id, playerHandles) {
      var params = {
        volume: this.getVolume(),
        ad_duration: this.getDuration(),
        url: url,
        id: id,
        playerHandles: playerHandles,
      };
      this.sendEvent(IV.VpaidEvents.AD_CLICK_THRU, params);
    };
    IasVpaidEventsHandler.prototype.sendAdSizeChangeEvent = function() {
      var params = {
        volume: this.getVolume(),
        ad_duration: this.getDuration(),
        width: this.getWidth(),
        height: this.getHeight(),
        viewMode: IasVpaidEventsHandler.VIEW_MODE,
      };
      this.sendEvent(IV.VpaidEvents.AD_SIZE_CHANGE, params);
    };
    IasVpaidEventsHandler.prototype.sendPureEvent = function(eventName) {
      var params = { volume: this.getVolume(), ad_duration: this.getDuration() };
      this.sendEvent(eventName, params);
    };
    IasVpaidEventsHandler.prototype.sendEvent = function(eventName, params) {
      try {
        this.iasInstanceProxy.sendEvent(eventName, params);
      } catch (e) {
        this.reporter.reportLog({ event_id: IasVpaidEventsHandler.IAS_SEND_EVENT_ERROR, event_value: e.message });
      }
    };
    IasVpaidEventsHandler.VIEW_MODE = 'normal';
    return IasVpaidEventsHandler;
  })();
  IV.IasVpaidEventsHandler = IasVpaidEventsHandler;
})(IV || (IV = {}));
var IV;
(function(IV) {
  var VerificationBlockingConfig = (function() {
    function VerificationBlockingConfig(
      decisionHandler,
      timeoutHandler,
      useRealBlocking,
      irollReporter,
      integrationName
    ) {
      this._decisionHandler = decisionHandler;
      this._timeoutHandler = timeoutHandler;
      this._useRealBlocking = useRealBlocking;
      this._irollReporter = irollReporter;
      this._integrationName = integrationName;
    }
    Object.defineProperty(VerificationBlockingConfig.prototype, 'decisionHandler', {
      get: function() {
        return this._decisionHandler;
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(VerificationBlockingConfig.prototype, 'timeoutHandler', {
      get: function() {
        return this._timeoutHandler;
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(VerificationBlockingConfig.prototype, 'useRealBlocking', {
      get: function() {
        return this._useRealBlocking;
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(VerificationBlockingConfig.prototype, 'irollReporter', {
      get: function() {
        return this._irollReporter;
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(VerificationBlockingConfig.prototype, 'integrationName', {
      get: function() {
        return this._integrationName;
      },
      enumerable: true,
      configurable: true,
    });
    return VerificationBlockingConfig;
  })();
  IV.VerificationBlockingConfig = VerificationBlockingConfig;
})(IV || (IV = {}));
var IV;
(function(IV) {
  var VerificationBlockingDecisionHandler = (function() {
    function VerificationBlockingDecisionHandler(irollReporter, vpaidWrapper) {
      this.decisionMade = false;
      this.irollReporter = irollReporter;
      this.vpaidWrapper = vpaidWrapper;
      this.registerToAdVideoComplete();
    }
    Object.defineProperty(VerificationBlockingDecisionHandler, 'AD_COMPLETE_EVENT_VALUE', {
      get: function() {
        return 'ad_complete';
      },
      enumerable: true,
      configurable: true,
    });
    VerificationBlockingDecisionHandler.prototype.decisionWasOnTime = function(decision) {
      this.decisionMade = true;
      this.irollReporter.reportLog({
        event_id: this.blockingDecisionEventIdPrefix() + '-on-time',
        event_value: this.toDecisionString(decision),
      });
    };
    VerificationBlockingDecisionHandler.prototype.decisionWasTooLate = function(decision, totalTime) {
      this.decisionMade = true;
      this.irollReporter.reportLog({
        event_id: this.blockingDecisionEventIdPrefix() + '-after-timeout-total',
        event_value: totalTime.toString(),
      });
      this.irollReporter.reportLog({
        event_id: this.blockingDecisionEventIdPrefix() + '-after-timeout-value',
        event_value: this.toDecisionString(decision),
      });
    };
    VerificationBlockingDecisionHandler.prototype.isDecisionMade = function() {
      return this.decisionMade;
    };
    VerificationBlockingDecisionHandler.prototype.toDecisionString = function(decision) {
      return decision.toString();
    };
    VerificationBlockingDecisionHandler.prototype.registerToAdVideoComplete = function() {
      var _this = this;
      this.vpaidWrapper.subscribe(
        function() {
          return _this.onAdComplete();
        },
        'AdVideoComplete',
        this
      );
    };
    VerificationBlockingDecisionHandler.prototype.onAdComplete = function() {
      if (!this.isDecisionMade()) {
        this.irollReporter.reportLog({
          event_id: this.blockingDecisionEventIdPrefix() + '-not-made',
          event_value: VerificationBlockingDecisionHandler.AD_COMPLETE_EVENT_VALUE,
        });
      }
    };
    return VerificationBlockingDecisionHandler;
  })();
  IV.VerificationBlockingDecisionHandler = VerificationBlockingDecisionHandler;
})(IV || (IV = {}));
var IV;
(function(IV) {
  var VerificationBlockingHandler = (function() {
    function VerificationBlockingHandler(verificationBlockingConfig) {
      this.blockAd = false;
      this.startTime = 0;
      this.decisionTime = 0;
      this.adStarted = false;
      this.decisionHandler = verificationBlockingConfig.decisionHandler;
      this.timeoutHandler = verificationBlockingConfig.timeoutHandler;
      this.useRealBlocking = verificationBlockingConfig.useRealBlocking;
      this.irollReporter = verificationBlockingConfig.irollReporter;
      this.integrationName = verificationBlockingConfig.integrationName;
    }
    VerificationBlockingHandler.prototype.waitForBlockingDecisionOrTimeout = function(postWaitCallback) {
      this.postWaitCallback = postWaitCallback;
      if (this.decisionHandler.isDecisionMade() || this.timeoutHandler.isTimeoutOccurred()) {
        this.timeoutHandler.stopTimer();
        this.postWaitCallback();
      }
    };
    VerificationBlockingHandler.prototype.shouldBlockAd = function() {
      if (this.blockAd) {
        return this.useRealBlocking;
      }
      return false;
    };
    VerificationBlockingHandler.prototype.onDecisionMade = function(decision) {
      this.decisionTime = new Date().getTime();
      this.blockAd = this.decisionHandler.shouldBlockAd(decision);
      if (!this.isAdStarted()) {
        this.timeoutHandler.stopTimer();
        this.decisionHandler.decisionWasOnTime(decision);
        if (this.postWaitCallback && !this.timeoutHandler.isTimeoutOccurred()) {
          this.postWaitCallback();
        }
      } else {
        this.decisionHandler.decisionWasTooLate(decision, this.decisionTime - this.startTime);
      }
    };
    VerificationBlockingHandler.prototype.startTimeoutTimer = function() {
      var _this = this;
      this.startTime = new Date().getTime();
      this.timeoutHandler.startTimer(function() {
        if (_this.postWaitCallback) {
          _this.postWaitCallback();
        }
      });
    };
    VerificationBlockingHandler.prototype.notifyAdStarted = function() {
      this.adStarted = true;
      if (!this.decisionHandler.isDecisionMade() && this.timeoutHandler.isTimeoutOccurred()) {
        this.reportBlockingDecisionTimedOut();
      }
    };
    VerificationBlockingHandler.prototype.eventIdForBlockingTimeout = function() {
      return this.integrationName + '-blocking-timeout';
    };
    VerificationBlockingHandler.prototype.reportBlockingDecisionTimedOut = function() {
      this.irollReporter.reportLog({
        event_id: this.eventIdForBlockingTimeout(),
        event_value: this.timeoutHandler.getTimeoutValueMs().toString(),
      });
    };
    VerificationBlockingHandler.prototype.isAdStarted = function() {
      return this.adStarted;
    };
    return VerificationBlockingHandler;
  })();
  IV.VerificationBlockingHandler = VerificationBlockingHandler;
})(IV || (IV = {}));
var IV;
(function(IV) {
  var VerificationBlockingTimeoutHandler = (function() {
    function VerificationBlockingTimeoutHandler(timeoutMs) {
      this.timeoutOccurred = false;
      this.timeoutMs = timeoutMs;
    }
    VerificationBlockingTimeoutHandler.prototype.startTimer = function(onTimeoutCallback) {
      var _this = this;
      this.timerId = setTimeout(function() {
        _this.timeoutOccurred = true;
        _this.timerId = null;
        onTimeoutCallback();
      }, this.timeoutMs);
    };
    VerificationBlockingTimeoutHandler.prototype.stopTimer = function() {
      if (this.timerId) {
        clearTimeout(this.timerId);
        this.timerId = null;
      }
    };
    VerificationBlockingTimeoutHandler.prototype.isTimeoutOccurred = function() {
      return this.timeoutOccurred;
    };
    VerificationBlockingTimeoutHandler.prototype.getTimeoutValueMs = function() {
      return this.timeoutMs;
    };
    return VerificationBlockingTimeoutHandler;
  })();
  IV.VerificationBlockingTimeoutHandler = VerificationBlockingTimeoutHandler;
})(IV || (IV = {}));
var __extends =
  (this && this.__extends) ||
  function(d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
  };
var IV;
(function(IV) {
  var IasBlockingDecisionHandler = (function(_super) {
    __extends(IasBlockingDecisionHandler, _super);
    function IasBlockingDecisionHandler() {
      _super.apply(this, arguments);
    }
    Object.defineProperty(IasBlockingDecisionHandler, 'BLOCKING_DECISION_EVENT_ID', {
      get: function() {
        return 'ias-blocking-decision';
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(IasBlockingDecisionHandler, 'BLOCKING_DECISION', {
      get: function() {
        return { BLOCK: 'block', ALLOW: 'safe' };
      },
      enumerable: true,
      configurable: true,
    });
    IasBlockingDecisionHandler.prototype.shouldBlockAd = function(decision) {
      return decision === IasBlockingDecisionHandler.BLOCKING_DECISION.BLOCK;
    };
    IasBlockingDecisionHandler.prototype.blockingDecisionEventIdPrefix = function() {
      return IasBlockingDecisionHandler.BLOCKING_DECISION_EVENT_ID;
    };
    return IasBlockingDecisionHandler;
  })(IV.VerificationBlockingDecisionHandler);
  IV.IasBlockingDecisionHandler = IasBlockingDecisionHandler;
})(IV || (IV = {}));
var __extends =
  (this && this.__extends) ||
  function(d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
  };
var IV;
(function(IV) {
  var IasBlockingHandler = (function(_super) {
    __extends(IasBlockingHandler, _super);
    function IasBlockingHandler(verificationBlockingConfig, iasVpaidEventsHandler, vpaidWrapper) {
      _super.call(this, verificationBlockingConfig);
      this.decisionUsedAndWasBlock = false;
      this.iasVpaidEventsHandler = iasVpaidEventsHandler;
      this.vpaidWrapper = vpaidWrapper;
    }
    IasBlockingHandler.prototype.onDecisionMade = function(decision) {
      var _this = this;
      var adStarted = this.isAdStarted();
      _super.prototype.onDecisionMade.call(this, decision);
      if (this.blockAd && !adStarted) {
        this.decisionUsedAndWasBlock = true;
        this.vpaidWrapper.subscribe(function() {
          return _this.iasVpaidEventsHandler.sendImpressionEvent();
        }, 'AdStarted');
      }
    };
    IasBlockingHandler.prototype.wasDecisionUsedAndWasBlock = function() {
      return this.decisionUsedAndWasBlock;
    };
    return IasBlockingHandler;
  })(IV.VerificationBlockingHandler);
  IV.IasBlockingHandler = IasBlockingHandler;
})(IV || (IV = {}));
var IV;
(function(IV) {
  var IasNonBlockingHandler = (function() {
    function IasNonBlockingHandler() {}
    IasNonBlockingHandler.prototype.onDecisionMade = function(decision) {};
    IasNonBlockingHandler.prototype.wasDecisionUsedAndWasBlock = function() {
      return false;
    };
    return IasNonBlockingHandler;
  })();
  IV.IasNonBlockingHandler = IasNonBlockingHandler;
})(IV || (IV = {}));
(function(SCOPE) {
  SCOPE.__IASVANS = function(x) {
    var c = {
        now: function() {
          return new Date().getTime();
        },
        sendMonitoringPixel: function(b) {
          try {
            this.sendUrlRequest(
              [
                '//pixel.adsafeprotected.com/mon?anId=10173&campId=',
                encodeURIComponent(l.getPartnerId()),
                '&pubId=',
                encodeURIComponent('vans-js_' + b),
              ].join('')
            );
          } catch (a) {
            k.report('smp', a);
          }
        },
        sendMonitoringDebugPixel: (function() {
          var b = ['adstop'],
            a = {};
          return function(h, f) {
            var g = l.hasDebugEnabled(),
              e = -1 < b.indexOf(h) && a[h];
            if (g && !e)
              try {
                var d = l.getAltMonDomain(),
                  t =
                    c.addProtocolToDomain('spixel.adsafeprotected.com') +
                    '/mon?anId=10173&campId=' +
                    encodeURIComponent(l.getPartnerId()) +
                    '&pubId=',
                  p =
                    c.addProtocolToDomain(d) +
                    '/mon?anId=925116&campId=' +
                    encodeURIComponent(l.getPartnerId()) +
                    '&pubId=',
                  r = encodeURIComponent(h),
                  q;
                q = f.replace(/=undefined&/g, '=&');
                this.sendUrlRequest([t, r, q].join(''));
                this.sendUrlRequest([p, r, q].join(''));
                a[h] = !0;
              } catch (n) {
                k.report('smp', n);
              }
          };
        })(),
        sendUrlRequest: function(b, a) {
          var c, f;
          if (b) {
            c = this.getWindow();
            try {
              (f = new c.XMLHttpRequest()), a && (f.onreadystatechange = a), f.open('GET', b), f.send();
            } catch (g) {}
          }
        },
        stringify: function(b) {
          if ('AdImpression' !== b.messageType) return JSON.stringify(b);
          var a = {};
          a.passthroughObj = l.getPassThroughObj();
          var c = '';
          try {
            c = JSON.stringify(b);
          } catch (f) {
            k.report('ser', f, a);
            return;
          }
          return c;
        },
        addProtocolToDomain: function(b) {
          return b.match(/^[a-zA-Z]+:\/\//) ? b : 'https://' + b;
        },
        getWindow: function() {
          return u.getWin();
        },
        getDocument: function() {
          return u.getDoc();
        },
        generateUID: function() {
          var b,
            a = '';
          try {
            for (b = 0; 8 > b; b++)
              a = [
                a,
                Math.floor(65536 * (1 + Math.random()))
                  .toString(16)
                  .substring(1),
              ].join('');
          } catch (c) {}
          return a;
        },
        noop: function() {},
      },
      k = (function() {
        var b = {};
        return {
          report: function(a, h, f) {
            if (!b[a])
              try {
                b[a] = !0;
                var g =
                  '//pixel.adsafeprotected.com/jsdiagnostic?code:vans-js_' +
                  encodeURIComponent(l.getPartnerId()) +
                  '_' +
                  a +
                  '&err:' +
                  encodeURIComponent(h.message);
                f && (g += '&config:' + encodeURIComponent(JSON.stringify(f)));
                c.sendUrlRequest(g);
              } catch (e) {}
          },
        };
      })(),
      s = (function() {
        var b,
          a = !1,
          h = function(g, b) {
            g == f() &&
              ((a = !0),
              m.setImpressionCallback(b),
              c.sendMonitoringDebugPixel('hs', m.monitoringQS()),
              m.flushUnsentEvents());
            return a ? 'jv3' : null;
          },
          f = function() {
            b || (b = c.generateUID());
            return b;
          };
        return {
          getVideoId: f,
          setNodeInterface: function(a) {
            var b,
              d,
              t,
              p = f();
            try {
              (b = 'IASid' + p),
                (d = 'blockAd' + p),
                (t = 'getIasVidBridgeVersion' + p),
                (a.className += ' integral-vid-' + p),
                (a[d] = c.noop),
                (a[b] = h),
                (a[t] = function() {
                  return '2';
                }),
                (a.getVersion = function() {
                  return '3.5.0';
                });
            } catch (r) {
              k.report('sni', r);
            }
          },
          isEstablished: function() {
            return a;
          },
          resetHandshake: function() {
            a = !1;
          },
        };
      })(),
      C = (function() {
        var b,
          a = function() {
            var a = function(a) {
                return 'undefined' !== typeof a;
              },
              b = (function() {
                var b = 'u';
                try {
                  a(window.opera) && a(window.opera.buildNumber)
                    ? (b = 'o')
                    : a(window.mozInnerScreenY)
                    ? (b = 'g')
                    : a(window.chrome) && a(window.chrome.csi)
                    ? (b = 'c')
                    : a(window.msWriteProfilerMark) && a(window.crypto)
                    ? (b = 'e')
                    : a(window.attachEvent) || a(window.msCrypto)
                    ? (b = 'i')
                    : a(window.WebKitPoint) && (b = 'w');
                } catch (c) {}
                return b;
              })(),
              c = (function() {
                var b = function(b) {
                    for (var c in b)
                      if (b.hasOwnProperty(c)) {
                        var e = b[c];
                        ('' !== e && 'null' !== e && 'undefined' !== e && null !== e && a(e)) || delete b[c];
                      }
                    return b;
                  },
                  c = function(b) {
                    var c = {},
                      e,
                      d;
                    for (d in b) b.hasOwnProperty(d) && ((e = b[d]), a(c[e]) ? (c[e] += d) : (c[e] = d));
                    b = {};
                    for (d in c) c.hasOwnProperty(d) && ((e = c[d]), (b[e] = d));
                    return b;
                  };
                return (function() {
                  var e = function() {
                      var b = { g: '', q: '' };
                      try {
                        b.q =
                          window.parent.parent.parent.parent.parent.parent.parent.parent.parent.parent.location.href;
                      } catch (v) {
                        var c = v.message,
                          c = c.substring(c.lastIndexOf('<') + 1, c.lastIndexOf('>')),
                          d;
                        if ((d = a(c)))
                          if (((d = !1), a(window.navigator) && a(window.navigator.userAgent))) {
                            var e = window.navigator.userAgent.match(/Firefox\/([\.0-9]+)/);
                            null !== e &&
                              2 == e.length &&
                              ((e = e[1].split('.')),
                              3 == parseInt(e[0], 10) &&
                                6 >= parseInt(e[1], 10) &&
                                (3 == e.length ? 13 >= parseInt(e[2], 10) && (d = !0) : (d = !0)));
                          }
                        d && (b.g = c);
                      }
                      return b;
                    },
                    d = {};
                  try {
                    d.a = encodeURIComponent(top.location.href);
                  } catch (f) {}
                  try {
                    d.b = encodeURIComponent(parent.location.href);
                  } catch (h) {}
                  if (window != top) {
                    try {
                      d.c = encodeURIComponent(parent.document.referrer);
                    } catch (k) {}
                    try {
                      d.e = encodeURIComponent(window.document.referrer);
                    } catch (m) {}
                  }
                  try {
                    d.d = encodeURIComponent(window.location.href);
                  } catch (l) {}
                  try {
                    var v = e();
                    d.g = encodeURIComponent(v.g);
                    d.q = encodeURIComponent(v.q);
                  } catch (D) {}
                  var d = b(d),
                    d = c(d),
                    e = [],
                    w;
                  for (w in d) d.hasOwnProperty(w) && e.push({ key: w, val: d[w] });
                  e.sort(function(a, b) {
                    return a.val.length > b.val.length ? 1 : a.val.length < b.val.length ? -1 : 0;
                  });
                  return e;
                })();
              })();
            return { br: b, urls: c };
          },
          h = function(a, b, c) {
            var f = ['//pixel.adsafeprotected.com/db2/video/', b, '/', c, '/skeleton.js?videoId=', s.getVideoId()].join(
              ''
            );
            b = function(a) {
              f = [f, '&adsafe_url=', a.val, '&adsafe_type=', a.key].join('');
            };
            try {
              a.urls.forEach(b), (f = [f, '&adsafe_jsinfo=br:', a.br].join(''));
            } catch (h) {
              k.report('bvu', h);
            }
            return f;
          },
          f = function() {
            if (4 == this.readyState)
              if (200 == this.status)
                try {
                  b('failed' === JSON.parse(this.responseText).action ? 'block' : 'safe');
                } catch (a) {
                  k.report('ba', a);
                }
              else k.report('blk_url_req_err', { message: this.status });
          };
        return {
          init: function(g, e, d) {
            var k = a();
            g = h(k, g, e);
            b = d;
            c.sendUrlRequest(g, f);
          },
        };
      })(),
      m = (function() {
        var b,
          a = [],
          h = !1,
          f = function(a) {
            var b = '';
            Object.keys(a).forEach(function(c) {
              -1 === ['advEntityId', 'pubEntityId', 'partner', 'debug'].indexOf(c) && (b += '&' + c + '=' + a[c]);
            });
            return b;
          },
          g = function(e) {
            if (s.isEstablished()) {
              var d;
              try {
                if ((d = c.stringify(e)))
                  if ('AdImpression' === e.messageType) c.getWindow()[b](d);
                  else c.getWindow().postMessage(d, '*');
              } catch (g) {
                k.report('dm', g);
              }
            } else if (m.nodeProvided)
              try {
                a.push(e);
              } catch (h) {
                k.report('cm', h);
              }
            else {
              d = x || 'pixel.adsafeprotected.com';
              var l = m.config;
              try {
                c.stringify(e),
                  'AdImpression' === e.messageType &&
                    (m.isCmTag
                      ? c.sendUrlRequest(['//' + d, '/mon?', f(l)].join(''))
                      : m.isFwTag &&
                        c.sendUrlRequest(
                          ['//' + d, '/rfw/st/', l.advEntityId + '/' + l.pubEntityId, '/skeleton.js'].join('')
                        ));
              } catch (q) {
                k.report('dm', q);
              }
            }
          };
        return {
          sendEvent: function(a, b) {
            if ('AdImpression' === a) {
              if (h) return;
              b && (b.ext_passthrough = m.passThroughObj);
              h = !0;
              c.sendMonitoringDebugPixel('ai', m.monitoringQS());
            } else
              'AdStopped' === a || 'AdVideoComplete' === a
                ? c.sendMonitoringDebugPixel('adstop', m.monitoringQS())
                : 'AdError' === a && c.sendMonitoringDebugPixel('aderr', m.monitoringQS());
            try {
              g({ messageType: a, id: s.getVideoId(), time: c.now(), partner: l.getPartnerId(), eventData: b });
            } catch (f) {
              k.report('se', f);
            }
          },
          setImpressionCallback: function(a) {
            b = a;
          },
          flushUnsentEvents: function() {
            try {
              a.forEach(g);
            } catch (b) {
              k.report('fue', b);
            }
          },
          passThroughObj: {},
          monitoringQS: function() {},
          clearSessionState: function() {
            h = !1;
            a.length = 0;
          },
        };
      })(),
      l = (function() {
        var b,
          a = {},
          h,
          f,
          g = {},
          e = 'impId creativeId campId placementId advEntityId pubEntityId chanId'.split(' '),
          d = function(a, b) {
            var c,
              d = x || 'pixel.adsafeprotected.com',
              e = function(a) {
                var b = '';
                Object.keys(a).forEach(function(c) {
                  'advEntityId' != c && 'pubEntityId' != c && 'partner' != c && (b += '&' + c + '=' + a[c]);
                });
                return b;
              };
            try {
              c = ['//', d, a, '?videoId=', s.getVideoId(), e(b)].join('');
            } catch (f) {
              k.report('bsurl', f);
            }
            return c;
          },
          l = function(a, b) {
            var d,
              e = !1,
              f = function() {
                !e &&
                  a.parentNode &&
                  (a.parentNode.appendChild(b), clearInterval(d), (e = !0), c.sendMonitoringDebugPixel('fwjsinj', n()));
              };
            f();
            e || (d = setInterval(f, 200));
          },
          p = function(a, b, e) {
            var f,
              g = c.getDocument(),
              h = function(a) {
                c.sendMonitoringDebugPixel('fwjsload', n());
              },
              k = function(a) {
                c.sendMonitoringDebugPixel('fwjsload_err', n());
              };
            try {
              (f = g.createElement('script')),
                (f.src = d(a, b)),
                f.addEventListener('load', h),
                f.addEventListener('error', k),
                l(e, f);
            } catch (m) {
              c.sendMonitoringPixel('inj_err');
            }
          },
          r = function(a, b, c) {
            s.setNodeInterface(c);
            var d = {};
            Object.getOwnPropertyNames(b).forEach(function(a) {
              'debug' !== a && (d[a] = b[a]);
            });
            p(a, d, c);
          },
          q = function(b) {
            e.forEach(function(c) {
              a[c] = b[c];
            });
            f && (a.monDomain = b.debug.monDomain);
          },
          n = function() {
            return (
              '&chanId=' +
              a.chanId +
              '&planId=' +
              a.advEntityId +
              '&placementId=' +
              a.pubEntityId +
              '&advId=' +
              a.campId +
              '&pubOrder=' +
              a.placementId +
              '&pubCreative=' +
              a.creativeId +
              '&impId=' +
              a.impId +
              '&ts=' +
              Date.now() +
              '&custom=3.5.0&custom2=jv3&custom3=' +
              h +
              '&adsafe_par'
            );
          },
          y = function(a) {
            var b = a && a.ownerDocument,
              d = a && a.parentNode,
              e = b && (b.defaultView || b.parentWindow),
              f = 'adnode_type_' + (a ? a.constructor.name || a.nodeName : 'null');
            a || c.sendMonitoringDebugPixel('adnode_null', n());
            a && !d && c.sendMonitoringDebugPixel('adnode_detached', n());
            a && !b && c.sendMonitoringDebugPixel('adnode_nodoc', n());
            b && !e && c.sendMonitoringDebugPixel('adnode_nowin', n());
            c.sendMonitoringDebugPixel(f, n());
          },
          z = function() {
            g.vv = '3.5.0';
            g.vanstag = h;
            g.xcamp = a.campId;
            g.xplac = a.placementId;
            g.xcreat = a.creativeId;
            g.ximp = a.impId;
          },
          A = function(a) {
            a.monitoringQS = n;
            a.passThroughObj = g;
            Object.keys(a).forEach(function(b) {
              m[b] = a[b];
            });
          },
          B = function(a) {
            var b = (a = a && a.ownerDocument) && a.parentWindow;
            return !!((a && a.defaultView) || b);
          };
        return {
          initCM: function(a, d) {
            var e = B(d);
            if (!a || !a.partner) throw Error('Missing partnerId');
            u.setWin(d);
            b = a.partner;
            f = a.debug && a.debug.enabled;
            h = 'cm';
            try {
              if (!a.anId) throw Error('Missing anId');
              q(a);
              z();
              A({ isFwTag: !1, isCmTag: !0, nodeProvided: e, config: a });
              c.sendMonitoringDebugPixel('init', n());
              y(d);
              e && r('/jsvid', a, d);
            } catch (g) {
              k.report('icm', g);
            }
          },
          initFW: function(a, d, e) {
            var g,
              l = B(d);
            if (!a || !a.partner) throw Error('Missing partnerId');
            u.setWin(d);
            b = a.partner;
            f = a.debug && a.debug.enabled;
            h = 'fw';
            try {
              if (!a.advEntityId || !a.pubEntityId)
                throw Error('Missing client id: advEntityId: ' + a.advEntityId + ' ,pubEntityId: ' + a.pubEntityId);
              q(a);
              z();
              A({ isFwTag: !0, isCmTag: !1, nodeProvided: l, config: a });
              c.sendMonitoringDebugPixel('init', n());
              y(d);
              e && C.init(a.advEntityId, a.pubEntityId, e);
              l && ((g = '/fwjsvid/st/' + a.advEntityId + '/' + a.pubEntityId + '/skeleton.js'), r(g, a, d));
            } catch (m) {
              k.report('ifw', m);
            }
          },
          getPartnerId: function() {
            return b;
          },
          getPassThroughObj: function() {
            return g;
          },
          getAltMonDomain: function() {
            return a.monDomain;
          },
          hasDebugEnabled: function() {
            return f;
          },
        };
      })(),
      u = (function() {
        var b = window;
        return {
          getWin: function() {
            return b;
          },
          setWin: function(a) {
            (a = a && a.ownerDocument) && a.defaultView
              ? (b = a.defaultView)
              : a && a.parentWindow
              ? (b = a.parentWindow)
              : k.report('sc', { message: '' });
          },
          getDoc: function() {
            return b.document;
          },
        };
      })();
    return { initFW: l.initFW, initCM: l.initCM, sendEvent: m.sendEvent };
  };
})(IV);
(function(SCOPE) {
  SCOPE.IasBlockingHandlerFactory = function(vpaidAd, integrationData) {
    this.createHandler = function() {
      var iasConfig = SCOPE.baseData.app_data['service-config']['integral'],
        timeoutMs = iasConfig['timeout'],
        useRealBlocking = iasConfig['useRealBlocking'];
      var decisionHandler = new SCOPE.IasBlockingDecisionHandler(
          integrationData.reporter,
          integrationData.vpaidWrapper
        ),
        timeoutHandler = new SCOPE.VerificationBlockingTimeoutHandler(timeoutMs);
      var blockingHandlerConfig = new SCOPE.VerificationBlockingConfig(
        decisionHandler,
        timeoutHandler,
        useRealBlocking,
        integrationData.reporter,
        integrationData.integrationName
      );
      var blockingHandler = new SCOPE.IasBlockingHandler(
        blockingHandlerConfig,
        integrationData.vpaidEventsHandler,
        integrationData.vpaidWrapper
      );
      vpaidAd._overrideVerificationBlockingHandlerAndStartTimer(blockingHandler);
      return blockingHandler;
    };
  };
})(IV);
(function(SCOPE) {
  SCOPE.vpaidExtensions.register(function(vpaidAd) {
    var INTEGRATION_NAME = 'ias';
    var reporter = vpaidAd.irollAd.report;
    var vpaidWrapper = new SCOPE.VPAIDAdWrapper(vpaidAd, INTEGRATION_NAME);
    var reportData = reporter.get('reportData');
    var fwConfig = new SCOPE.IasConfigComposer(reportData.session_id).compose(SCOPE.baseData);
    var diagnosticReporter = new IV.IasIntegrationDiagnosticReporter(reporter, INTEGRATION_NAME, fwConfig);
    var vpaidEventsHandler = new SCOPE.IasVpaidEventsHandler(vpaidWrapper, reporter, diagnosticReporter);
    var iasInstanceProxy = new SCOPE.IasInstanceProxy(fwConfig, vpaidWrapper.getPlayer() || vpaidWrapper.getSlot());
    var iframeInjector = new SCOPE.FriendlyIframeInjector(INTEGRATION_NAME, vpaidAd.slot);
    var integrationData = {
      integrationName: INTEGRATION_NAME,
      reporter: reporter,
      vpaidWrapper: vpaidWrapper,
      vpaidEventsHandler: vpaidEventsHandler,
    };
    var blockingHandler = new SCOPE.IasBlockingHandlerFactory(vpaidAd, integrationData).createHandler();
    var iasRunner = new SCOPE.IasIntegrationRunner(
      vpaidEventsHandler,
      blockingHandler,
      reporter,
      diagnosticReporter,
      iasInstanceProxy
    );
    var loader = new SCOPE.IasIntegrationLoader(vpaidWrapper, reporter, iframeInjector, iasRunner);
    loader.load(window, new IV.IframeInjection());
  }, SCOPE.vpaidExtensions.EXTENSION_POINTS.BEFORE_AD_LOAD);
})(IV);
(function(SCOPE) {
  SCOPE.vpaidExtensions.register(function(vpaidAd) {
    var adSlot = vpaidAd.slot;
    var wrapCreativeWithIframe =
      (isCustomFormat() && shouldUseIframe() && isSlotOnOtherDocument(adSlot)) || isPreroll();
    vpaidAd.irollAd.set('wrapCreativeWithIframe', wrapCreativeWithIframe);
    var waitForCreativeToLoad = isCustomFormat() && shouldWaitForLoad();
    vpaidAd.irollAd.set('waitForCreativeToLoad', waitForCreativeToLoad && wrapCreativeWithIframe);
    if (wrapCreativeWithIframe) {
      var mainScript = isPreroll() ? null : IV._currentScript,
        injector = new SCOPE.CreativeIframeScriptInjector(),
        listener = new SCOPE.CreativeIframeReadyListener(vpaidAd.irollAd),
        wrapper = new SCOPE.CreativeIframeWrapper(vpaidAd, adSlot.ownerDocument);
      var builder = new SCOPE.CreativeIframeBuilder(injector, wrapper, listener);
      var creativeIframe = builder
        .setInitialSize({ width: vpaidAd.initialWidth, height: vpaidAd.initialHeight })
        .setContainerSlot(adSlot)
        .setScript(mainScript)
        .build();
      vpaidAd.irollAd.set('canvasAppender', new SCOPE.CreativeIframeCanvasAppender(vpaidAd.irollAd, creativeIframe));
    }
  }, SCOPE.vpaidExtensions.EXTENSION_POINTS.BEFORE_AD_LOAD);
  function isCustomFormat() {
    return typeof SCOPE.baseData.app_data.custom === 'object';
  }
  function shouldUseIframe() {
    return SCOPE.baseData.app_data.custom.iframe === true;
  }
  function shouldWaitForLoad() {
    return SCOPE.baseData.app_data.custom.waitForLoad === true;
  }
  function isPreroll() {
    return SCOPE.baseData.app_data.isPreroll === true;
  }
  function isSlotOnOtherDocument(adSlot) {
    return adSlot && adSlot.ownerDocument !== document;
  }
})(IV);
var IV;
(function(IV) {
  var CreativeIframeBuilder = (function() {
    function CreativeIframeBuilder(injector, wrapper, listener) {
      this.injector = injector;
      this.wrapper = wrapper;
      this.listener = listener;
    }
    Object.defineProperty(CreativeIframeBuilder, 'IFRAME_ID', {
      get: function() {
        return 'iv-creative-iframe';
      },
      enumerable: true,
      configurable: true,
    });
    CreativeIframeBuilder.prototype.setInitialSize = function(initialSize) {
      this.initialSize = initialSize;
      return this;
    };
    CreativeIframeBuilder.prototype.setContainerSlot = function(container) {
      this.container = container;
      return this;
    };
    CreativeIframeBuilder.prototype.setScript = function(script) {
      this.script = script;
      return this;
    };
    CreativeIframeBuilder.prototype.build = function() {
      var creativeIframe = this.createIframe();
      this.appendToContainer(creativeIframe);
      this.listenToCreativeReadyState();
      this.injectBodyAndScript(creativeIframe);
      return creativeIframe;
    };
    CreativeIframeBuilder.prototype.createIframe = function() {
      if (!this.initialSize) {
        throw Error('Missing iframe initial size');
      }
      var creativeIframe = document.createElement('IFRAME');
      creativeIframe.id = CreativeIframeBuilder.IFRAME_ID;
      creativeIframe.width = this.initialSize.width + 'px';
      creativeIframe.height = this.initialSize.height + 'px';
      creativeIframe.style.left = creativeIframe.style.right = '0px';
      creativeIframe.frameBorder = '0';
      creativeIframe.style.padding = creativeIframe.style.margin = '0';
      creativeIframe.style.backgroundColor = 'transparent';
      creativeIframe.scrolling = 'no';
      creativeIframe.allowFullscreen = true;
      return creativeIframe;
    };
    CreativeIframeBuilder.prototype.appendToContainer = function(creativeIframe) {
      if (!this.container) {
        throw Error('Missing container slot');
      }
      this.wrapper.appendIframeTo(creativeIframe, this.container);
    };
    CreativeIframeBuilder.prototype.listenToCreativeReadyState = function() {
      this.listener.startCreativeOnReadyEvent();
    };
    CreativeIframeBuilder.prototype.injectBodyAndScript = function(creativeIframe) {
      if (!!this.script) {
        this.injector.injectBodyAndScriptInto(creativeIframe, this.script);
      }
    };
    return CreativeIframeBuilder;
  })();
  IV.CreativeIframeBuilder = CreativeIframeBuilder;
})(IV || (IV = {}));
var __extends =
  (this && this.__extends) ||
  function(d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
  };
var IV;
(function(IV) {
  var CreativeIframeCanvasAppender = (function(_super) {
    __extends(CreativeIframeCanvasAppender, _super);
    function CreativeIframeCanvasAppender(core, creativeIframe) {
      _super.call(this, core);
      this.creativeIframe = creativeIframe;
    }
    CreativeIframeCanvasAppender.prototype.getSize = function() {
      return { width: parseInt(this.creativeIframe.width, 10), height: parseInt(this.creativeIframe.height, 10) };
    };
    CreativeIframeCanvasAppender.prototype.appendToContainer = function(elem) {
      this.creativeIframe.contentWindow.document.body.appendChild(elem);
      elem.style.width = '100% !important';
      elem.style.height = '100% !important';
    };
    return CreativeIframeCanvasAppender;
  })(IV.CanvasAppender);
  IV.CreativeIframeCanvasAppender = CreativeIframeCanvasAppender;
})(IV || (IV = {}));
var IV;
(function(IV) {
  var CreativeIframeReadyListener = (function() {
    function CreativeIframeReadyListener(core) {
      var _this = this;
      this.startListenTime = 0;
      this.customFormat = null;
      this.creativeSDK = null;
      this.irollReady = false;
      this.core = core;
      this.reporter = core.report;
      this.fireCoreInitializedOnce = _.once(function() {
        return _this.fireCoreInitialized();
      });
      this.startCreativeOnce = _.once(function() {
        return _this.startCreative();
      });
    }
    Object.defineProperty(CreativeIframeReadyListener, 'CREATIVE_IFRAME_LOAD_TIME_EVENT_ID', {
      get: function() {
        return 'vpaid-creative-ifr-load-time';
      },
      enumerable: true,
      configurable: true,
    });
    CreativeIframeReadyListener.prototype.startCreativeOnReadyEvent = function() {
      var _this = this;
      this.addOnCreativeReadyCallbackToMyself();
      IV.Events.on('CustomFormatReady', function(customFormat) {
        if (!_this.core.shouldWaitForCreativeToLoad()) {
          customFormat.preparePlay();
          customFormat.play();
        }
        _this.customFormat = customFormat;
        if (_this.creativeSDK) {
          _this.startCreativeOnce();
        }
      });
      IV.Events.on('IRollInit', function() {
        _this.irollReady = true;
        if (_this.shouldFireCoreInitialized()) {
          _this.fireCoreInitializedOnce();
        }
      });
      this.startListenTime = new Date().getTime();
    };
    CreativeIframeReadyListener.prototype.addOnCreativeReadyCallbackToMyself = function() {
      var _this = this;
      IV['theCreativeIsReady'] = function(creativeSDK) {
        _this.onCreativeReady(creativeSDK);
      };
    };
    CreativeIframeReadyListener.prototype.onCreativeReady = function(creativeSDK) {
      this.creativeSDK = creativeSDK;
      if (this.shouldFireCoreInitialized()) {
        this.fireCoreInitializedOnce();
      }
      if (this.customFormat) {
        this.startCreativeOnce();
      }
    };
    CreativeIframeReadyListener.prototype.shouldFireCoreInitialized = function() {
      return !!this.creativeSDK && this.irollReady;
    };
    CreativeIframeReadyListener.prototype.fireCoreInitialized = function() {
      if (this.core.shouldWaitForCreativeToLoad()) {
        this.core.set('initialized', true);
        IV.Events.trigger(this.core.get('id') + ':core_initialized', this.core);
      }
    };
    CreativeIframeReadyListener.prototype.startCreative = function() {
      if (this.creativeSDK && this.customFormat) {
        this.reporter.reportLog({
          event_id: CreativeIframeReadyListener.CREATIVE_IFRAME_LOAD_TIME_EVENT_ID,
          event_value: (new Date().getTime() - this.startListenTime).toString(),
        });
        this.creativeSDK.Events.trigger('StartCreative', this.customFormat);
      }
    };
    return CreativeIframeReadyListener;
  })();
  IV.CreativeIframeReadyListener = CreativeIframeReadyListener;
})(IV || (IV = {}));
var IV;
(function(IV) {
  var CreativeIframeScriptInjector = (function() {
    function CreativeIframeScriptInjector() {}
    CreativeIframeScriptInjector.prototype.injectBodyAndScriptInto = function(creativeIframe, script) {
      var ifrWin = creativeIframe.contentWindow;
      var ifrDoc = ifrWin.document;
      ifrDoc
        .open()
        .write(
          '<bo' +
            'dy>' +
            '<scr' +
            'ipt>\n                    var IVA = {\n                        onCreativeReady: function(sdk) { \n                            ivIfrCtx && ivIfrCtx.theCreativeIsReady(sdk); \n                        }\n                    };\n                </scr' +
            'ipt>' +
            '<scr' +
            'ipt type="' +
            script.type +
            '" src="' +
            script.src +
            '"></scr' +
            'ipt>' +
            '</bo' +
            'dy>'
        );
      ifrDoc.close();
      ifrWin['ivIfrCtx'] = IV;
    };
    return CreativeIframeScriptInjector;
  })();
  IV.CreativeIframeScriptInjector = CreativeIframeScriptInjector;
})(IV || (IV = {}));
var IV;
(function(IV) {
  var CreativeIframeWrapper = (function() {
    function CreativeIframeWrapper(vpaidAd, contextDoc) {
      this.vpaidAd = vpaidAd;
      this.contextDoc = contextDoc;
    }
    Object.defineProperty(CreativeIframeWrapper, 'MONITOR_INTERVAL_MS', {
      get: function() {
        return 250;
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(CreativeIframeWrapper, 'CONTAINER_ID', {
      get: function() {
        return 'iv-creative-iframe-container';
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(CreativeIframeWrapper, 'FULLSCREEN_ATTRIBUTES', {
      get: function() {
        return ['fullscreen', 'webkitIsFullScreen', 'mozFullScreen', 'msFullscreenElement', 'webkitFullscreenElement'];
      },
      enumerable: true,
      configurable: true,
    });
    CreativeIframeWrapper.prototype.appendIframeTo = function(creativeIframe, elem) {
      this.creativeIframe = creativeIframe;
      var container = document.createElement('DIV');
      container.id = CreativeIframeWrapper.CONTAINER_ID;
      $(container).css({ width: '100%', height: '100%', position: 'absolute', left: '0px', top: '0px' });
      container.appendChild(creativeIframe);
      elem.appendChild(container);
      this.monitorContainerSize(elem);
    };
    CreativeIframeWrapper.prototype.monitorContainerSize = function(container) {
      var _this = this;
      this.vpaidAd.subscribe(
        function() {
          return _this.updateContainerSize(container);
        },
        'AdSizeChange',
        this
      );
      setInterval(function() {
        return _this.checkAdSize(container);
      }, CreativeIframeWrapper.MONITOR_INTERVAL_MS);
    };
    CreativeIframeWrapper.prototype.updateContainerSize = function(container) {
      $(container).width(this.vpaidAd.getAdWidth());
      $(container).height(this.vpaidAd.getAdHeight());
      this.checkAdSize(container);
    };
    CreativeIframeWrapper.prototype.checkAdSize = function(container) {
      if (this.isFullscreen()) {
        this.updateIframeSize(screen.width, screen.height);
      } else {
        var containerWidth = $(container).width();
        var containerHeight = $(container).height();
        var iframeWidth = parseInt(this.creativeIframe.width, 10);
        var iframeHeight = parseInt(this.creativeIframe.height, 10);
        if (containerWidth !== iframeWidth || containerHeight !== iframeHeight) {
          this.updateIframeSize(containerWidth, containerHeight);
        }
      }
    };
    CreativeIframeWrapper.prototype.isFullscreen = function() {
      return this.isFullscreenViewMode() || this.isDomFullscreen();
    };
    CreativeIframeWrapper.prototype.isFullscreenViewMode = function() {
      return this.vpaidAd.viewMode === 'fullscreen';
    };
    CreativeIframeWrapper.prototype.isDomFullscreen = function() {
      var _this = this;
      return CreativeIframeWrapper.FULLSCREEN_ATTRIBUTES.some(function(fsAttr) {
        return _this.contextDoc && !!_this.contextDoc[fsAttr];
      });
    };
    CreativeIframeWrapper.prototype.updateIframeSize = function(width, height) {
      this.creativeIframe.width = width + 'px';
      this.creativeIframe.height = height + 'px';
    };
    return CreativeIframeWrapper;
  })();
  IV.CreativeIframeWrapper = CreativeIframeWrapper;
})(IV || (IV = {}));
(function(SCOPE) {
  SCOPE.VPAIDAdWrapper = function(vpaidAd, moduleName) {
    this.handshakeVersion = function() {
      return vpaidAd.handshakeVersion();
    };
    this.subscribe = function(aCallback, eventName, aContext) {
      if (typeof aContext === 'undefined') aContext = this;
      vpaidAd.safeSubscribe(aCallback, eventName, aContext, moduleName);
    };
    this.unsubscribe = function(aCallback, eventName) {
      vpaidAd.unsubscribe(aCallback, eventName);
    };
    this.getAdExpanded = function() {
      return vpaidAd.getAdExpanded();
    };
    this.getAdSize = function() {
      return vpaidAd.getAdSize();
    };
    this.getAdSkippableState = function() {
      return vpaidAd.getAdSkippableState();
    };
    this.getAdWidth = function() {
      return vpaidAd.getAdWidth();
    };
    this.getAdHeight = function() {
      return vpaidAd.getAdHeight();
    };
    this.getAdCompanions = function() {
      return vpaidAd.getAdCompanions();
    };
    this.getAdIcons = function() {
      return vpaidAd.getAdIcons();
    };
    this.getAdLinear = function() {
      return vpaidAd.getAdLinear();
    };
    this.getAdVolume = function() {
      return vpaidAd.getAdVolume();
    };
    this.getAdDuration = function() {
      return vpaidAd.getAdDuration();
    };
    this.getAdRemainingTime = function() {
      return vpaidAd.getAdRemainingTime();
    };
    this.getPlayer = function() {
      var player = vpaidAd.videoSlot;
      return _.isElement(player) ? player : null;
    };
    this.getSlot = function() {
      return vpaidAd.slot;
    };
    this.getPreviousEvents = function() {
      return vpaidAd.loggedEvents;
    };
    this.getViewMode = function() {
      return vpaidAd.viewMode;
    };
  };
})(IV);
var __extends =
  (this && this.__extends) ||
  function(d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
  };
var IV;
(function(IV) {
  var VpaidAdImpressionHandler = (function(_super) {
    __extends(VpaidAdImpressionHandler, _super);
    function VpaidAdImpressionHandler(irollReporter) {
      var _this = this;
      _super.call(this, VpaidAdImpressionHandler.IMPRESSION_ACTION_NAME);
      this.irollReporter = irollReporter;
      this.irollReporter.addPostReportedPixelCallback(function() {
        return _this.postFiredPixel();
      }, VpaidAdImpressionHandler.IMPRESSION_ACTION_NAME);
    }
    Object.defineProperty(VpaidAdImpressionHandler, 'IMPRESSION_PIXEL_TIMEOUT_MS', {
      get: function() {
        return 5000;
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(VpaidAdImpressionHandler, 'IMPRESSION_TIMEOUT_EVENT_ID', {
      get: function() {
        return 'vpaid-impression-pixel-timeout';
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(VpaidAdImpressionHandler, 'IMPRESSION_ACTION_NAME', {
      get: function() {
        return 'play';
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(VpaidAdImpressionHandler, 'IMPRESSION_PIXEL_OPTIONS', {
      get: function() {
        return { action: VpaidAdImpressionHandler.IMPRESSION_ACTION_NAME };
      },
      enumerable: true,
      configurable: true,
    });
    VpaidAdImpressionHandler.prototype.wasPixelFired = function() {
      return this.irollReporter.wasPixelReported(VpaidAdImpressionHandler.IMPRESSION_PIXEL_OPTIONS);
    };
    VpaidAdImpressionHandler.prototype.waitForImpressionPixelToBeReported = function(loadedCb) {
      var _this = this;
      this.waitForPixelToFire(loadedCb);
      if (!this.pixelFired) {
        setTimeout(function() {
          if (!_this.pixelFired) {
            _this.irollReporter.reportLog({
              event_id: VpaidAdImpressionHandler.IMPRESSION_TIMEOUT_EVENT_ID,
              event_value: VpaidAdImpressionHandler.IMPRESSION_PIXEL_TIMEOUT_MS.toString(),
            });
          }
        }, VpaidAdImpressionHandler.IMPRESSION_PIXEL_TIMEOUT_MS);
      }
    };
    return VpaidAdImpressionHandler;
  })(IV.VpaidPixelLoadedHandler);
  IV.VpaidAdImpressionHandler = VpaidAdImpressionHandler;
})(IV || (IV = {}));
(function(SCOPE) {
  SCOPE.vpaidExtensions.register(function(vpaidAd) {
    var MODULE_NAME = 'innovid_viewability';
    var contextWindow = window;
    var globalCoreEventsId = vpaidAd.irollAd.get('id');
    var reporter = vpaidAd.irollAd.report;
    var isInApp = vpaidAd.irollAd.inAppDetector.isInApp();
    var SCREEN_OFFSET = isInApp ? 0 : 50;
    var vpaidWrapper = new SCOPE.VPAIDAdWrapper(vpaidAd, MODULE_NAME);
    var defaultViewabilityObject = new SCOPE.ViewabilityCheckResult();
    var geometryCalculator = new SCOPE.GeometryCalculator();
    var intersectionObserverCalculator = new SCOPE.IntersectionObserverCalculator(defaultViewabilityObject);
    var domObscuringCalculator = new IV.DomObscuringCalculator(document);
    var fullscreenHelper = new SCOPE.FullscreenHelper(SCREEN_OFFSET);
    var viewabilityCalculator = new SCOPE.ViewabilityCalculator(
      contextWindow,
      defaultViewabilityObject,
      geometryCalculator,
      intersectionObserverCalculator,
      domObscuringCalculator,
      fullscreenHelper
    );
    var adSizeChangeHelper = new SCOPE.ViewabilityAdSizeChangeHelper(
      contextWindow,
      vpaidWrapper,
      viewabilityCalculator,
      fullscreenHelper
    );
    var viewabilityReporters = isInApp
      ? [new SCOPE.ViewabilityLogsReporter(reporter), new SCOPE.ViewabilityStatsReporter(reporter)]
      : [new SCOPE.ViewabilityStatsReporter(reporter)];
    var viewabilityEventsDispatcher = new SCOPE.ViewabilityEventsDispatcher(
      vpaidAd.irollAd.fireTrackingEvent.bind(vpaidAd.irollAd)
    );
    var listener = new SCOPE.ViewabilityListener(globalCoreEventsId, viewabilityCalculator);
    var videoPlayer = vpaidAd.irollAd.get('videoPlayer');
    var adImpressionHanlder = new SCOPE.VpaidAdImpressionHandler(reporter);
    var manager = new SCOPE.ViewabilityManager(
      vpaidWrapper,
      listener,
      viewabilityCalculator,
      adImpressionHanlder,
      videoPlayer
    );
    adSizeChangeHelper.listenToSizeChange();
    viewabilityEventsDispatcher.observe(manager);
    viewabilityReporters.forEach(function(reporter) {
      reporter.observe(manager);
    });
    var errorObserver = new IV.ViewabilityErrorObserver(globalCoreEventsId, MODULE_NAME);
    errorObserver.observe(manager);
    vpaidWrapper.subscribe(function() {
      SCOPE.ViewabilityIframeDetector.reportIframeType(globalCoreEventsId, contextWindow);
    }, 'AdImpression');
    manager.start();
  }, SCOPE.vpaidExtensions.EXTENSION_POINTS.BEFORE_AD_LOAD);
})(IV);
var IV;
(function(IV) {
  var ViewabilityReporter = (function() {
    function ViewabilityReporter(reporter) {
      this.reporter = reporter;
    }
    ViewabilityReporter.prototype.reportVP1S = function(measurableResult) {
      this.reportViewability(IV.ViewabilityPixelEvents.EventId.VP_1S, measurableResult);
    };
    ViewabilityReporter.prototype.observe = function(observable) {
      var _this = this;
      observable
        .onQuartile(function(eventId, result) {
          return _this.reportViewability(eventId, result);
        })
        .onMeasurable(function(result) {
          return _this.reportVP1S(result);
        })
        .onViewable(function(result) {
          return _this.reportConsecutiveTime(result);
        });
    };
    return ViewabilityReporter;
  })();
  IV.ViewabilityReporter = ViewabilityReporter;
})(IV || (IV = {}));
var IV;
(function(IV) {
  var ViewabilityAdSizeChangeHelper = (function() {
    function ViewabilityAdSizeChangeHelper(contextWindow, vpaidWrapper, viewabilityCalculator, fullscreenHelper) {
      this.contextWindow = contextWindow;
      this.vpaidWrapper = vpaidWrapper;
      this.viewabilityCalculator = viewabilityCalculator;
      this.fullscreenHelper = fullscreenHelper;
    }
    ViewabilityAdSizeChangeHelper.prototype.listenToSizeChange = function() {
      var _this = this;
      this.vpaidWrapper.subscribe(
        function() {
          return _this.onAdSizeChange();
        },
        'AdSizeChange',
        this
      );
    };
    ViewabilityAdSizeChangeHelper.prototype.onAdSizeChange = function() {
      var width = this.vpaidWrapper.getAdWidth();
      var height = this.vpaidWrapper.getAdHeight();
      this.viewabilityCalculator.toggleFullscreen(
        this.fullscreenHelper.isSameOrBiggerThanScreenSize(this.contextWindow, width, height)
      );
    };
    return ViewabilityAdSizeChangeHelper;
  })();
  IV.ViewabilityAdSizeChangeHelper = ViewabilityAdSizeChangeHelper;
})(IV || (IV = {}));
var IV;
(function(IV) {
  var ViewabilityConsecutiveTimeResult = (function() {
    function ViewabilityConsecutiveTimeResult(_checkResult, _ctTime, _ctCountThreshold, _ctFocus) {
      this.checkResult = _checkResult;
      this.ctTime = _ctTime;
      this.ctCountThreshold = _ctCountThreshold;
      this.ctFocus = _ctFocus;
    }
    ViewabilityConsecutiveTimeResult.prototype.setVolume = function(volume) {
      this.checkResult.volume = volume;
    };
    ViewabilityConsecutiveTimeResult.prototype.toString = function() {
      return this.checkResult.toString() + ';' + this.ctTime + ';' + this.ctCountThreshold + ';' + this.ctFocus;
    };
    return ViewabilityConsecutiveTimeResult;
  })();
  IV.ViewabilityConsecutiveTimeResult = ViewabilityConsecutiveTimeResult;
})(IV || (IV = {}));
var IV;
(function(IV) {
  var ViewabilityErrorObserver = (function() {
    function ViewabilityErrorObserver(globalCoreEventsId, moduleName) {
      this.globalCoreEventsId = globalCoreEventsId;
      this.moduleName = moduleName;
    }
    Object.defineProperty(ViewabilityErrorObserver, 'AD_ERROR_EVENT_NAME', {
      get: function() {
        return 'ad_interface_error';
      },
      enumerable: true,
      configurable: true,
    });
    ViewabilityErrorObserver.prototype.observe = function(observable) {
      var _this = this;
      observable.onError(function(error) {
        IV.Events.trigger(
          _this.globalCoreEventsId + ':' + ViewabilityErrorObserver.AD_ERROR_EVENT_NAME,
          _this.moduleName,
          error
        );
      });
    };
    return ViewabilityErrorObserver;
  })();
  IV.ViewabilityErrorObserver = ViewabilityErrorObserver;
})(IV || (IV = {}));
var IV;
(function(IV) {
  var ViewabilityEventsDispatcher = (function() {
    function ViewabilityEventsDispatcher(fireTrackingEventCb) {
      this.fireTrackingEventCb = fireTrackingEventCb;
    }
    ViewabilityEventsDispatcher.prototype.dispatchMeasurableEvent = function() {
      var _this = this;
      setTimeout(function() {
        return _this.fireTrackingEventCb('measurable');
      }, 0);
    };
    ViewabilityEventsDispatcher.prototype.dispatchViewableEvent = function() {
      var _this = this;
      setTimeout(function() {
        return _this.fireTrackingEventCb('viewable');
      }, 0);
    };
    ViewabilityEventsDispatcher.prototype.observe = function(observable) {
      var _this = this;
      observable
        .onMeasurable(function() {
          return _this.dispatchMeasurableEvent();
        })
        .onViewable(function() {
          return _this.dispatchViewableEvent();
        });
    };
    return ViewabilityEventsDispatcher;
  })();
  IV.ViewabilityEventsDispatcher = ViewabilityEventsDispatcher;
})(IV || (IV = {}));
var IV;
(function(IV) {
  var ViewabilityListener = (function() {
    function ViewabilityListener(globalCoreEventsId, viewabilityCalculator) {
      this.intervalId = null;
      this.lastTime = 0;
      this.accumulatedTime = 0;
      this.paused = false;
      this.globalCoreEventsId = globalCoreEventsId;
      this.viewabilityCalculator = viewabilityCalculator;
    }
    Object.defineProperty(ViewabilityListener, 'VIEWABILITY_CHECK_INTERVAL_MS', {
      get: function() {
        return 200;
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(ViewabilityListener, 'VIEWABLE_DURATION', {
      get: function() {
        return 2000;
      },
      enumerable: true,
      configurable: true,
    });
    ViewabilityListener.prototype.checkViewability = function(
      viewabilityElement,
      adSlot,
      onMeasurable,
      onConsecutiveTime,
      onError
    ) {
      if (this.isPaused()) {
        return;
      }
      var currentTime = new Date().getTime();
      if (this.lastTime === 0) {
        this.lastTime = currentTime;
        return;
      }
      try {
        var result = this.viewabilityCalculator.checkViewability(viewabilityElement, adSlot);
        if (result.isMeasurable()) {
          onMeasurable(result);
        }
        if (result.isViewable()) {
          this.accumulatedTime += currentTime - this.lastTime;
          this.lastTime = currentTime;
          if (this.accumulatedTime >= ViewabilityListener.VIEWABLE_DURATION) {
            this.stop();
            onConsecutiveTime(
              new IV.ViewabilityConsecutiveTimeResult(result, this.accumulatedTime, 1, result.focusState)
            );
          }
        } else {
          this.reset();
        }
      } catch (e) {
        onError(e);
      }
    };
    ViewabilityListener.prototype.start = function(
      viewabilityElement,
      adSlot,
      onMeasurable,
      onConsecutiveTime,
      onError
    ) {
      if (!this.isStarted()) {
        var checkViewability = this.checkViewability.bind(
          this,
          viewabilityElement,
          adSlot,
          onMeasurable,
          onConsecutiveTime,
          onError
        );
        this.registerToPlayPause();
        checkViewability();
        this.intervalId = setInterval(checkViewability, ViewabilityListener.VIEWABILITY_CHECK_INTERVAL_MS);
      }
    };
    ViewabilityListener.prototype.resume = function() {
      this.paused = false;
    };
    ViewabilityListener.prototype.pause = function() {
      this.paused = true;
      this.lastTime = 0;
    };
    ViewabilityListener.prototype.stop = function() {
      if (this.isStarted()) {
        clearInterval(this.intervalId);
        this.intervalId = null;
      }
    };
    ViewabilityListener.prototype.reset = function() {
      this.accumulatedTime = 0;
      this.lastTime = 0;
    };
    ViewabilityListener.prototype.isStarted = function() {
      return !!this.intervalId;
    };
    ViewabilityListener.prototype.isPaused = function() {
      return this.paused;
    };
    ViewabilityListener.prototype.registerToPlayPause = function() {
      var _this = this;
      IV.Events.on(this.globalCoreEventsId + ':video_play', function() {
        _this.resume();
      });
      IV.Events.on(this.globalCoreEventsId + ':video_pause', function() {
        _this.pause();
      });
    };
    return ViewabilityListener;
  })();
  IV.ViewabilityListener = ViewabilityListener;
})(IV || (IV = {}));
var __extends =
  (this && this.__extends) ||
  function(d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
  };
var IV;
(function(IV) {
  var ViewabilityLogsReporter = (function(_super) {
    __extends(ViewabilityLogsReporter, _super);
    function ViewabilityLogsReporter() {
      _super.apply(this, arguments);
    }
    ViewabilityLogsReporter.prototype.reportViewability = function(eventId, checkResult) {
      this.reporter.reportLog({
        event_id: IV.ViewabilityPixelEvents.ACTION_NAME + '_' + eventId,
        event_value: checkResult.toString(),
      });
    };
    ViewabilityLogsReporter.prototype.reportConsecutiveTime = function(consecutiveTimeResult) {
      this.reporter.reportLog({
        event_id: IV.ViewabilityPixelEvents.ACTION_NAME + '_' + IV.ViewabilityPixelEvents.EventId.CONSECUTIVE_TIME,
        event_value: consecutiveTimeResult.toString(),
      });
    };
    return ViewabilityLogsReporter;
  })(IV.ViewabilityReporter);
  IV.ViewabilityLogsReporter = ViewabilityLogsReporter;
})(IV || (IV = {}));
var IV;
(function(IV) {
  var ViewabilityManager = (function() {
    function ViewabilityManager(vpaidWrapper, viewabilityListener, viewabilityCalculator, adImpressionHandler, player) {
      this.impressionOccurred = false;
      this.vpaidWrapper = vpaidWrapper;
      this.viewabilityListener = viewabilityListener;
      this.viewabilityCalculator = viewabilityCalculator;
      this.adImpressionHandler = adImpressionHandler;
      this.player = player;
      var videoSlot = this.vpaidWrapper.getPlayer();
      this.adSlot = this.vpaidWrapper.getSlot();
      this.viewabilityElement = videoSlot !== null ? videoSlot : this.adSlot;
      this.reportVp1sOnce = _.once(this.reportVP1S);
      this.reportConsecutiveTimeOnce = _.once(this.reportConsecutiveTime);
      this.measurableCallbacks = [];
      this.viewableCallbacks = [];
      this.quartilesCallbacks = [];
      this.errorCallbacks = [];
    }
    ViewabilityManager.prototype.start = function() {
      var _this = this;
      try {
        this.viewabilityCalculator.initialize(this.viewabilityElement);
      } catch (e) {
        this.reportError(e);
      }
      this.vpaidWrapper.subscribe(
        function() {
          return _this.onAdImpression();
        },
        'AdImpression',
        this
      );
      this.vpaidWrapper.subscribe(
        function() {
          return _this.onAdFirstQuartile();
        },
        'AdVideoFirstQuartile',
        this
      );
      this.vpaidWrapper.subscribe(
        function() {
          return _this.onAdMidpoint();
        },
        'AdVideoMidpoint',
        this
      );
      this.vpaidWrapper.subscribe(
        function() {
          return _this.onAdThirdQuartile();
        },
        'AdVideoThirdQuartile',
        this
      );
      this.vpaidWrapper.subscribe(
        function() {
          return _this.onAdComplete();
        },
        'AdVideoComplete',
        this
      );
      this.vpaidWrapper.subscribe(
        function() {
          return _this.onAdPaused();
        },
        'AdPaused',
        this
      );
      this.vpaidWrapper.subscribe(
        function() {
          return _this.onAdPlaying();
        },
        'AdPlaying',
        this
      );
      this.vpaidWrapper.subscribe(
        function() {
          return _this.onAdStopped();
        },
        'AdStopped',
        this
      );
      this.vpaidWrapper.subscribe(
        function() {
          return _this.onAdStopped();
        },
        'AdError',
        this
      );
    };
    ViewabilityManager.prototype.onQuartile = function(cb) {
      this.quartilesCallbacks.push(cb);
      return this;
    };
    ViewabilityManager.prototype.onMeasurable = function(cb) {
      this.measurableCallbacks.push(cb);
      return this;
    };
    ViewabilityManager.prototype.onViewable = function(cb) {
      this.viewableCallbacks.push(cb);
      return this;
    };
    ViewabilityManager.prototype.onError = function(cb) {
      this.errorCallbacks.push(cb);
      return this;
    };
    ViewabilityManager.prototype.onAdImpression = function() {
      var _this = this;
      this.adImpressionHandler.waitForImpressionPixelToBeReported(function() {
        _this.impressionOccurred = true;
        _this.checkAndReportViewability(IV.ViewabilityPixelEvents.EventId.VP_START);
        _this.startCheckingViewability();
      });
    };
    ViewabilityManager.prototype.startCheckingViewability = function() {
      var _this = this;
      this.viewabilityListener.start(
        this.viewabilityElement,
        this.adSlot,
        function(result) {
          _this.reportVp1sOnce(result);
        },
        function(result) {
          _this.reportConsecutiveTimeOnce(result);
        },
        function(e) {
          return _this.reportError(e);
        }
      );
    };
    ViewabilityManager.prototype.onAdFirstQuartile = function() {
      this.checkAndReportViewability(IV.ViewabilityPixelEvents.EventId.VP_FIRST_QUARTILE);
    };
    ViewabilityManager.prototype.onAdMidpoint = function() {
      this.checkAndReportViewability(IV.ViewabilityPixelEvents.EventId.VP_MIDPOINT);
    };
    ViewabilityManager.prototype.onAdThirdQuartile = function() {
      this.checkAndReportViewability(IV.ViewabilityPixelEvents.EventId.VP_THIRD_QUARTILE);
    };
    ViewabilityManager.prototype.onAdComplete = function() {
      var FORCE_VP1S = true;
      this.checkAndReportViewability(IV.ViewabilityPixelEvents.EventId.VP_COMPLETE, FORCE_VP1S);
      this.viewabilityListener.stop();
    };
    ViewabilityManager.prototype.onAdPaused = function() {
      this.viewabilityListener.pause();
    };
    ViewabilityManager.prototype.onAdPlaying = function() {
      this.viewabilityListener.resume();
    };
    ViewabilityManager.prototype.onAdStopped = function() {
      try {
        this.viewabilityListener.stop();
        if (this.impressionOccurred) {
          var result = this.viewabilityCalculator.checkViewability(this.viewabilityElement, this.adSlot);
          this.reportVp1sOnce(result);
        }
        this.viewabilityCalculator.dispose();
      } catch (e) {
        this.reportError(e);
      }
    };
    ViewabilityManager.prototype.checkAndReportViewability = function(eventId, forceVp1s) {
      if (forceVp1s === void 0) {
        forceVp1s = false;
      }
      try {
        var result = this.viewabilityCalculator.checkViewability(this.viewabilityElement, this.adSlot);
        result.volume = this.getVolume();
        this.quartilesCallbacks.forEach(function(cb) {
          return cb(eventId, result);
        });
        if (forceVp1s || result.isMeasurable()) {
          this.reportVp1sOnce(result);
        }
      } catch (e) {
        this.reportError(e);
      }
    };
    ViewabilityManager.prototype.reportConsecutiveTime = function(result) {
      if (this.impressionOccurred) {
        result.setVolume(this.getVolume());
        this.viewableCallbacks.forEach(function(cb) {
          return cb(result);
        });
      }
    };
    ViewabilityManager.prototype.reportVP1S = function(result) {
      if (this.impressionOccurred) {
        this.measurableCallbacks.forEach(function(cb) {
          return cb(result);
        });
      }
    };
    ViewabilityManager.prototype.reportError = function(e) {
      this.errorCallbacks.forEach(function(cb) {
        return cb(e);
      });
    };
    ViewabilityManager.prototype.getVolume = function() {
      var volume = this.player.getVolume();
      return volume >= 0 ? volume * 100 : 0;
    };
    return ViewabilityManager;
  })();
  IV.ViewabilityManager = ViewabilityManager;
})(IV || (IV = {}));
var IV;
(function(IV) {
  var ViewabilityPixelEvents = (function() {
    function ViewabilityPixelEvents() {}
    Object.defineProperty(ViewabilityPixelEvents, 'ACTION_NAME', {
      get: function() {
        return 'viewability';
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(ViewabilityPixelEvents, 'EventId', {
      get: function() {
        return {
          VP_START: 'vp000',
          VP_FIRST_QUARTILE: 'vp025',
          VP_MIDPOINT: 'vp050',
          VP_THIRD_QUARTILE: 'vp075',
          VP_COMPLETE: 'vp100',
          VP_1S: 'vp1s',
          CONSECUTIVE_TIME: 'consecutiveTime',
        };
      },
      enumerable: true,
      configurable: true,
    });
    return ViewabilityPixelEvents;
  })();
  IV.ViewabilityPixelEvents = ViewabilityPixelEvents;
})(IV || (IV = {}));
var __extends =
  (this && this.__extends) ||
  function(d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
  };
var IV;
(function(IV) {
  var ViewabilityStatsReporter = (function(_super) {
    __extends(ViewabilityStatsReporter, _super);
    function ViewabilityStatsReporter() {
      _super.apply(this, arguments);
    }
    ViewabilityStatsReporter.prototype.reportViewability = function(eventId, checkResult) {
      this.reporter.submit({
        action: IV.ViewabilityPixelEvents.ACTION_NAME,
        event_id: eventId,
        event_value: checkResult.toString(),
      });
    };
    ViewabilityStatsReporter.prototype.reportConsecutiveTime = function(consecutiveTimeResult) {
      this.reporter.submit({
        action: IV.ViewabilityPixelEvents.ACTION_NAME,
        event_id: IV.ViewabilityPixelEvents.EventId.CONSECUTIVE_TIME,
        event_value: consecutiveTimeResult.toString(),
      });
    };
    return ViewabilityStatsReporter;
  })(IV.ViewabilityReporter);
  IV.ViewabilityStatsReporter = ViewabilityStatsReporter;
})(IV || (IV = {}));
var IV;
(function(IV) {
  var DomElementUtils = (function() {
    function DomElementUtils() {}
    Object.defineProperty(DomElementUtils, 'ELEMENT_NODE_TYPE', {
      get: function() {
        return 1;
      },
      enumerable: true,
      configurable: true,
    });
    DomElementUtils.getObjectRect = function(elem) {
      var objRect = null;
      if (elem && (elem.getClientRects || elem.getBoundingClientRect)) {
        try {
          objRect = elem.getClientRects()[0];
        } catch (e) {
          objRect = elem.getBoundingClientRect();
        }
      }
      return objRect;
    };
    DomElementUtils.getOverlappingArea = function(rect, elem) {
      var playerArea = rect.width * rect.height;
      var xOverlap = Math.max(0, Math.min(rect.right, elem.right) - Math.max(rect.left, elem.left));
      var yOverlap = Math.max(0, Math.min(rect.bottom, elem.bottom) - Math.max(rect.top, elem.top));
      return (xOverlap * yOverlap) / playerArea;
    };
    DomElementUtils.isDomElement = function(elem) {
      return !!(elem && elem.nodeType === DomElementUtils.ELEMENT_NODE_TYPE);
    };
    return DomElementUtils;
  })();
  IV.DomElementUtils = DomElementUtils;
})(IV || (IV = {}));
var IV;
(function(IV) {
  var DomObscuringCalculator = (function() {
    function DomObscuringCalculator(contextDocument) {
      this.contextDocument = contextDocument;
    }
    DomObscuringCalculator.prototype.checkDomObscuring = function(player, adSlot) {
      return 0;
    };
    return DomObscuringCalculator;
  })();
  IV.DomObscuringCalculator = DomObscuringCalculator;
})(IV || (IV = {}));
var IV;
(function(IV) {
  var FullscreenHelper = (function() {
    function FullscreenHelper(screenOffset) {
      this.screenOffset = screenOffset;
    }
    Object.defineProperty(FullscreenHelper, 'FULLSCREEN_ATTRIBUTES', {
      get: function() {
        return ['fullscreen', 'webkitIsFullScreen', 'mozFullScreen', 'msFullscreenElement', 'webkitFullscreenElement'];
      },
      enumerable: true,
      configurable: true,
    });
    FullscreenHelper.prototype.isFullscreen = function(adSlot, contextWindow, friendlyIframe) {
      var isFS =
        this.isDocumentFullscreen(contextWindow.document, adSlot) ||
        this.isElementSizeFullscreen(contextWindow, adSlot);
      var currWindow = contextWindow;
      while (!isFS && friendlyIframe && currWindow !== currWindow.parent) {
        currWindow = currWindow.parent;
        isFS = this.isDocumentFullscreen(currWindow.document);
      }
      return isFS;
    };
    FullscreenHelper.prototype.isElementSizeFullscreen = function(contextWindow, adSlot) {
      if (adSlot) {
        var width = adSlot.clientWidth;
        var height = adSlot.clientHeight;
        return this.isSameOrBiggerThanScreenSize(contextWindow, width, height);
      }
      return false;
    };
    FullscreenHelper.prototype.isSameOrBiggerThanScreenSize = function(contextWindow, width, height) {
      var screenWidth = contextWindow.screen.width;
      var screenHeight = contextWindow.screen.height;
      return (
        this.isScreenSizeValid(screenWidth, screenHeight) &&
        (this.isPortraitFullscreen(width, height, screenWidth, screenHeight) ||
          this.isLandscapeFullscreen(width, height, screenWidth, screenHeight))
      );
    };
    FullscreenHelper.prototype.isPortraitFullscreen = function(width, height, screenWidth, screenHeight) {
      return width >= screenWidth - this.screenOffset && height >= screenHeight - this.screenOffset;
    };
    FullscreenHelper.prototype.isLandscapeFullscreen = function(width, height, screenWidth, screenHeight) {
      return width >= screenHeight - this.screenOffset && height >= screenWidth - this.screenOffset;
    };
    FullscreenHelper.prototype.isScreenSizeValid = function(screenWidth, screenHeight) {
      return (
        screenWidth > 0 && screenHeight > 0 && screenWidth >= this.screenOffset && screenHeight >= this.screenOffset
      );
    };
    FullscreenHelper.prototype.isDocumentFullscreen = function(doc, adSlot) {
      var isFS = false;
      if (doc) {
        isFS = FullscreenHelper.FULLSCREEN_ATTRIBUTES.some(function(attr) {
          return !!doc[attr];
        });
        if (!isFS && adSlot && adSlot.ownerDocument) {
          isFS = this.isDocumentFullscreen(adSlot.ownerDocument);
        }
      }
      return isFS;
    };
    return FullscreenHelper;
  })();
  IV.FullscreenHelper = FullscreenHelper;
})(IV || (IV = {}));
var IV;
(function(IV) {
  var GeometryCalculator = (function() {
    function GeometryCalculator() {}
    GeometryCalculator.prototype.getViewabilityState = function(elem, contextWindow) {
      contextWindow = this.ownerWindow(elem, contextWindow);
      var minViewPortSize = this.getMinViewPortSize(contextWindow),
        viewablePercentage;
      if (minViewPortSize.area === Infinity) {
        throw Error('Failed to determine viewport');
      }
      var assetRect = IV.DomElementUtils.getObjectRect(elem);
      var playerArea = assetRect.width * assetRect.height;
      if (minViewPortSize.area / playerArea < 0.5) {
        viewablePercentage = Math.floor((100 * minViewPortSize.area) / playerArea);
      }
      var viewPortSize = this.getViewPortSize(contextWindow.top),
        visibleAssetSize = this.getAssetVisibleDimension(elem, contextWindow);
      if (
        visibleAssetSize.bottom < 0 ||
        visibleAssetSize.right < 0 ||
        visibleAssetSize.top > viewPortSize.height ||
        visibleAssetSize.left > viewPortSize.width
      ) {
        viewablePercentage = 0;
      } else if (
        visibleAssetSize.left > 0 &&
        visibleAssetSize.top > 0 &&
        visibleAssetSize.bottom < viewPortSize.height &&
        visibleAssetSize.right < viewPortSize.width
      ) {
        viewablePercentage = 100;
      } else {
        if (visibleAssetSize.bottom > viewPortSize.height) {
          visibleAssetSize.height -= visibleAssetSize.bottom - viewPortSize.height;
        }
        if (visibleAssetSize.top < 0) {
          visibleAssetSize.height += visibleAssetSize.top;
        }
        if (visibleAssetSize.left < 0) {
          visibleAssetSize.width += visibleAssetSize.left;
        }
        if (visibleAssetSize.right > viewPortSize.width) {
          visibleAssetSize.width -= visibleAssetSize.right - viewPortSize.width;
        }
        viewablePercentage = Math.floor((100 * (visibleAssetSize.width * visibleAssetSize.height)) / playerArea);
      }
      return {
        clientWidth: viewPortSize.width,
        clientHeight: viewPortSize.height,
        objTop: assetRect.top,
        objBottom: assetRect.bottom,
        objLeft: assetRect.left,
        objRight: assetRect.right,
        percentViewable: viewablePercentage,
      };
    };
    GeometryCalculator.prototype.ownerWindow = function(elem, contextWindow) {
      try {
        return elem.ownerDocument.defaultView !== contextWindow ? elem.ownerDocument.defaultView : contextWindow;
      } catch (e) {
        return contextWindow;
      }
    };
    GeometryCalculator.prototype.getMinViewPortSize = function(contextWindow) {
      var minViewPortSize = this.getViewPortSize(contextWindow),
        minViewPortArea = minViewPortSize.area,
        currentWindow = contextWindow;
      while (currentWindow !== currentWindow.top) {
        currentWindow = currentWindow.parent;
        var viewPortSize = this.getViewPortSize(currentWindow);
        if (viewPortSize.area < minViewPortArea) {
          minViewPortArea = viewPortSize.area;
          minViewPortSize = viewPortSize;
        }
      }
      return minViewPortSize;
    };
    GeometryCalculator.prototype.getViewPortSize = function(contextWindow) {
      var viewPortSize = { width: Infinity, height: Infinity, area: Infinity };
      if (!isNaN(contextWindow.document.body.clientWidth) && contextWindow.document.body.clientWidth > 0) {
        viewPortSize.width = contextWindow.document.body.clientWidth;
      }
      if (!isNaN(contextWindow.document.body.clientHeight) && contextWindow.document.body.clientHeight > 0) {
        viewPortSize.height = contextWindow.document.body.clientHeight;
      }
      if (
        !!contextWindow.document.documentElement &&
        !!contextWindow.document.documentElement.clientWidth &&
        !isNaN(contextWindow.document.documentElement.clientWidth)
      ) {
        viewPortSize.width = contextWindow.document.documentElement.clientWidth;
      }
      if (
        !!contextWindow.document.documentElement &&
        !!contextWindow.document.documentElement.clientHeight &&
        !isNaN(contextWindow.document.documentElement.clientHeight)
      ) {
        viewPortSize.height = contextWindow.document.documentElement.clientHeight;
      }
      if (!!contextWindow.innerWidth && !isNaN(contextWindow.innerWidth)) {
        viewPortSize.width = Math.min(viewPortSize.width, contextWindow.innerWidth);
      }
      if (!!contextWindow.innerHeight && !isNaN(contextWindow.innerHeight)) {
        viewPortSize.height = Math.min(viewPortSize.height, contextWindow.innerHeight);
      }
      viewPortSize.area = viewPortSize.height * viewPortSize.width;
      return viewPortSize;
    };
    GeometryCalculator.prototype.getAssetVisibleDimension = function(elem, contextWindow) {
      var currWindow = contextWindow;
      var parentWindow = contextWindow.parent;
      var resultDimension = { width: 0, height: 0, left: 0, right: 0, top: 0, bottom: 0 };
      if (elem) {
        var elementRect = this.getPositionRelativeToViewPort(elem, contextWindow);
        elementRect.width = elementRect.right - elementRect.left;
        elementRect.height = elementRect.bottom - elementRect.top;
        resultDimension = elementRect;
        if (currWindow !== parentWindow) {
          var parentDimension = this.getAssetVisibleDimension(currWindow.frameElement, parentWindow);
          if (parentDimension.bottom < resultDimension.bottom) {
            if (parentDimension.bottom < resultDimension.top) {
              resultDimension.top = parentDimension.bottom;
            }
            resultDimension.bottom = parentDimension.bottom;
          }
          if (parentDimension.right < resultDimension.right) {
            if (parentDimension.right < resultDimension.left) {
              resultDimension.left = parentDimension.right;
            }
            resultDimension.right = parentDimension.right;
          }
          resultDimension.width = resultDimension.right - resultDimension.left;
          resultDimension.height = resultDimension.bottom - resultDimension.top;
        }
      }
      return resultDimension;
    };
    GeometryCalculator.prototype.getPositionRelativeToViewPort = function(elem, contextWindow) {
      var currWindow = contextWindow;
      var parentWindow = contextWindow.parent;
      var resultPosition = { left: 0, right: 0, top: 0, bottom: 0 };
      if (elem) {
        if (currWindow !== parentWindow) {
          resultPosition = this.getPositionRelativeToViewPort(currWindow.frameElement, parentWindow);
        } else {
          var elementRect = IV.DomElementUtils.getObjectRect(elem);
          resultPosition = {
            left: elementRect.left + resultPosition.left,
            right: elementRect.right + resultPosition.left,
            top: elementRect.top + resultPosition.top,
            bottom: elementRect.bottom + resultPosition.top,
          };
        }
      }
      return resultPosition;
    };
    return GeometryCalculator;
  })();
  IV.GeometryCalculator = GeometryCalculator;
})(IV || (IV = {}));
var IV;
(function(IV) {
  var IntersectionObserverCalculator = (function() {
    function IntersectionObserverCalculator(checkResult) {
      var _this = this;
      this.observationCallback = function(changes) {
        changes.forEach(function(change) {
          _this.updateCheckObject(change);
        });
      };
      var thresholds = this.setThresholds(IntersectionObserverCalculator.IO_THRESHOLD_RESOLUTION);
      this._check = checkResult.clone();
      if (typeof window.IntersectionObserver !== 'undefined') {
        this._observer = new window.IntersectionObserver(this.observationCallback, { threshold: thresholds });
        this.initializeViewabilityCheckResultForIO();
      }
    }
    Object.defineProperty(IntersectionObserverCalculator, 'IO_THRESHOLD_RESOLUTION', {
      get: function() {
        return 0.05;
      },
      enumerable: true,
      configurable: true,
    });
    IntersectionObserverCalculator.prototype.isSupported = function() {
      return !!this._observer;
    };
    IntersectionObserverCalculator.prototype.observeAd = function(adElement) {
      if (this._adElement === adElement) {
        return;
      }
      this._adElement = adElement;
      if (this.isSupported()) {
        this._observer.observe(this._adElement);
      }
    };
    IntersectionObserverCalculator.prototype.disconnect = function() {
      this._observer.disconnect();
    };
    IntersectionObserverCalculator.prototype.checkViewability = function() {
      return this._check.clone();
    };
    IntersectionObserverCalculator.prototype.setThresholds = function(resolution) {
      var thresholdLevel = 0,
        thresholds = [];
      for (var i = 0; i <= 1 / resolution; i++) {
        thresholds[i] = parseFloat(thresholdLevel.toFixed(2));
        thresholdLevel += resolution;
      }
      return thresholds;
    };
    IntersectionObserverCalculator.prototype.updateCheckObject = function(intersectionObserverCheck) {
      var targetWidth =
        intersectionObserverCheck.boundingClientRect.right - intersectionObserverCheck.boundingClientRect.left;
      var targetHeight =
        intersectionObserverCheck.boundingClientRect.bottom - intersectionObserverCheck.boundingClientRect.top;
      this._check = this._check.clone();
      this._check.viewablePercentage = 100 * intersectionObserverCheck.intersectionRatio;
      if (targetWidth > 0 && targetHeight > 0) {
        this._check.playerRectangle = new IV.PlayerRectangle(
          intersectionObserverCheck.boundingClientRect.left,
          intersectionObserverCheck.boundingClientRect.top,
          targetWidth,
          targetHeight
        );
      }
      if (intersectionObserverCheck.rootBounds) {
        this._check.clientDimensions = new IV.ClientDimensions(
          intersectionObserverCheck.rootBounds.width,
          intersectionObserverCheck.rootBounds.height
        );
      } else {
        this._check.clientDimensions = new IV.ClientDimensions(targetWidth, targetHeight);
      }
    };
    IntersectionObserverCalculator.prototype.initializeViewabilityCheckResultForIO = function() {
      this._check.checkMethod = IV.ViewabilityCheckResult.CheckMethod.IO;
      this._check.status = IV.ViewabilityCheckResult.Status.OK;
    };
    return IntersectionObserverCalculator;
  })();
  IV.IntersectionObserverCalculator = IntersectionObserverCalculator;
})(IV || (IV = {}));
var IV;
(function(IV) {
  var ViewabilityCalculator = (function() {
    function ViewabilityCalculator(
      contextWindow,
      defaultCheckObj,
      geometryCalculator,
      intersectionObserverCalculator,
      domObscuringCalculator,
      fullscreenHelper
    ) {
      this.forceFullscreen = false;
      this.contextWindow = contextWindow;
      this.defaultCheckObj = defaultCheckObj;
      this.geometryCalculator = geometryCalculator;
      this.intersectionObserverCalculator = intersectionObserverCalculator;
      this.domObscuringCalculator = domObscuringCalculator;
      this.fullscreenHelper = fullscreenHelper;
    }
    ViewabilityCalculator.prototype.initialize = function(player) {
      this.intersectionObserverCalculator.observeAd(player);
    };
    ViewabilityCalculator.prototype.checkViewability = function(player, adSlot) {
      var check = this.defaultCheckObj.clone();
      var adSlotRect = IV.DomElementUtils.getObjectRect(adSlot);
      if (adSlotRect) {
        check.clientDimensions = this.getClientDimensions(adSlotRect.width, adSlotRect.height);
        check.playerRectangle = new IV.PlayerRectangle(
          adSlotRect.left,
          adSlotRect.top,
          adSlotRect.width,
          adSlotRect.height
        );
      }
      if (IV.DomElementUtils.isDomElement(player)) {
        if (
          IV.FeatureBitsResolver.isEnabled(IV.FeatureBitsResolver.FEATURE_NAMES.VPAID_VIEWABILITY_GEO_FRIENDLY_IFRAME)
        ) {
          check = this.checkGeometry(
            player,
            this.checkIntersectionObserver(
              player,
              this.checkFullScreen(
                adSlot,
                this.checkDomObscuring(player, adSlot, this.checkCssInvisibility(player, check))
              )
            )
          );
        } else {
          check = this.checkIntersectionObserver(
            player,
            this.checkGeometry(
              player,
              this.checkFullScreen(
                adSlot,
                this.checkDomObscuring(player, adSlot, this.checkCssInvisibility(player, check))
              )
            )
          );
        }
      }
      if (check.checkMethod !== IV.ViewabilityCheckResult.CheckMethod.FULL_SCREEN) {
        check.focusState = this.isInFocus(adSlot)
          ? IV.ViewabilityCheckResult.FocusState.ON
          : IV.ViewabilityCheckResult.FocusState.OFF;
      }
      check.iframeState = IV.ViewabilityIframeDetector.isIframe(this.contextWindow)
        ? IV.ViewabilityCheckResult.IFrameState.IN_IFRAME
        : IV.ViewabilityCheckResult.IFrameState.NOT_IN_IFRAME;
      if (
        IV.ViewabilityIframeDetector.isIframe(this.contextWindow) &&
        check.checkMethod === IV.ViewabilityCheckResult.CheckMethod.NONE
      ) {
        check.status = IV.ViewabilityCheckResult.Status.IN_IFRAME;
      }
      return check;
    };
    ViewabilityCalculator.prototype.dispose = function() {
      this.intersectionObserverCalculator.disconnect();
    };
    ViewabilityCalculator.prototype.checkGeometry = function(player, check) {
      if (check.checkMethod !== IV.ViewabilityCheckResult.CheckMethod.NONE) {
        return check;
      }
      if (
        IV.FeatureBitsResolver.isEnabled(IV.FeatureBitsResolver.FEATURE_NAMES.VPAID_VIEWABILITY_GEO_FRIENDLY_IFRAME)
      ) {
        if (IV.ViewabilityIframeDetector.isCrossdomainIframe(this.contextWindow)) {
          return check;
        }
      } else {
        if (IV.ViewabilityIframeDetector.isIframe(this.contextWindow)) {
          return check;
        }
      }
      var originalCheck = check.clone();
      try {
        var viewabilityResult = this.geometryCalculator.getViewabilityState(player, this.contextWindow);
        check.checkMethod = IV.ViewabilityCheckResult.CheckMethod.GEOMETRY;
        check.status = IV.ViewabilityCheckResult.Status.OK;
        if (
          viewabilityResult.objRight > viewabilityResult.objLeft &&
          viewabilityResult.objBottom > viewabilityResult.objTop
        ) {
          check.playerRectangle = new IV.PlayerRectangle(
            viewabilityResult.objLeft,
            viewabilityResult.objTop,
            viewabilityResult.objBottom - viewabilityResult.objTop,
            viewabilityResult.objRight - viewabilityResult.objLeft
          );
        }
        check.clientDimensions = new IV.ClientDimensions(viewabilityResult.clientWidth, viewabilityResult.clientHeight);
        check.viewablePercentage = viewabilityResult.percentViewable - check.percentObscured;
        return check;
      } catch (ignore) {}
      return originalCheck;
    };
    ViewabilityCalculator.prototype.checkIntersectionObserver = function(player, check) {
      if (
        check.checkMethod !== IV.ViewabilityCheckResult.CheckMethod.NONE ||
        !this.intersectionObserverCalculator.isSupported()
      ) {
        return check;
      }
      var originalCheck = check.clone();
      try {
        this.intersectionObserverCalculator.observeAd(player);
        return this.intersectionObserverCalculator.checkViewability();
      } catch (ignore) {}
      return originalCheck;
    };
    ViewabilityCalculator.prototype.checkFullScreen = function(adSlot, check) {
      var originalCheck = check.clone();
      try {
        if (this.isFullScreen(adSlot)) {
          check.status = IV.ViewabilityCheckResult.Status.OK;
          check.checkMethod = IV.ViewabilityCheckResult.CheckMethod.FULL_SCREEN;
          check.viewablePercentage = 100;
          check.playerRectangle = new IV.PlayerRectangle(
            0,
            0,
            this.contextWindow.screen.width,
            this.contextWindow.screen.height
          );
          check.focusState = IV.ViewabilityCheckResult.FocusState.ON;
        }
        return check;
      } catch (ignore) {}
      return originalCheck;
    };
    ViewabilityCalculator.prototype.checkCssInvisibility = function(player, check) {
      var originalCheck = check.clone();
      try {
        var style = this.contextWindow.getComputedStyle(player, null);
        var visibility = style.getPropertyValue('visibility');
        var display = style.getPropertyValue('display');
        if (visibility === 'hidden' || display === 'none') {
          check.checkMethod = IV.ViewabilityCheckResult.CheckMethod.CSS_INVISIBILITY;
          check.status = IV.ViewabilityCheckResult.Status.OK;
          check.viewablePercentage = 0;
        }
        return check;
      } catch (ignore) {}
      return originalCheck;
    };
    ViewabilityCalculator.prototype.checkDomObscuring = function(player, adSlot, check) {
      var originalCheck = check.clone();
      try {
        check.percentObscured = this.domObscuringCalculator.checkDomObscuring(player, adSlot);
        if (check.percentObscured > 50) {
          check.viewablePercentage = 100 - check.percentObscured;
          check.checkMethod = IV.ViewabilityCheckResult.CheckMethod.DOM_OBSCURING;
          check.status = IV.ViewabilityCheckResult.Status.OK;
          return check;
        }
        return check;
      } catch (ignore) {}
      return originalCheck;
    };
    ViewabilityCalculator.prototype.isFullScreen = function(adSlot) {
      return (
        this.forceFullscreen ||
        this.fullscreenHelper.isFullscreen(
          adSlot,
          this.contextWindow,
          IV.ViewabilityIframeDetector.isIframe(this.contextWindow)
            ? !IV.ViewabilityIframeDetector.isCrossdomainIframe(this.contextWindow)
            : true
        )
      );
    };
    ViewabilityCalculator.prototype.isInFocus = function(adSlot) {
      if (adSlot && adSlot.ownerDocument && typeof adSlot.ownerDocument.hidden !== 'undefined') {
        if (adSlot.ownerDocument.hidden === true) {
          return false;
        }
      }
      if (IV.ViewabilityIframeDetector.isCrossdomainIframe(this.contextWindow)) {
        return true;
      }
      if (this.contextWindow.top.document.hasFocus) {
        return this.contextWindow.top.document.hasFocus();
      }
      return true;
    };
    ViewabilityCalculator.prototype.getClientDimensions = function(fallbackWidth, fallbackHeight) {
      var clientDimensions = new IV.ClientDimensions(0, 0);
      var contextDocument = this.contextWindow.document;
      if (!IV.ViewabilityIframeDetector.isCrossdomainIframe(this.contextWindow)) {
        var topDoc = this.contextWindow.top.document;
        clientDimensions = new IV.ClientDimensions(topDoc.body.clientWidth, topDoc.body.clientHeight);
      } else if (contextDocument.body.clientWidth && contextDocument.body.clientHeight) {
        clientDimensions = new IV.ClientDimensions(contextDocument.body.clientWidth, contextDocument.body.clientHeight);
      } else {
        clientDimensions = new IV.ClientDimensions(fallbackWidth, fallbackHeight);
      }
      return clientDimensions;
    };
    ViewabilityCalculator.prototype.toggleFullscreen = function(isFullscreen) {
      this.forceFullscreen = isFullscreen;
    };
    return ViewabilityCalculator;
  })();
  IV.ViewabilityCalculator = ViewabilityCalculator;
})(IV || (IV = {}));
var IV;
(function(IV) {
  var IntegerUtils = (function() {
    function IntegerUtils() {}
    IntegerUtils.toInteger = function(num) {
      if (isNaN(num)) {
        return 0;
      } else {
        return num | 0;
      }
    };
    return IntegerUtils;
  })();
  var ClientDimensions = (function() {
    function ClientDimensions(_width, _height) {
      this._width = IntegerUtils.toInteger(_width);
      this._height = IntegerUtils.toInteger(_height);
    }
    ClientDimensions.prototype.toString = function() {
      return this._width + ',' + this._height;
    };
    ClientDimensions.prototype.clone = function() {
      return new ClientDimensions(this._width, this._height);
    };
    return ClientDimensions;
  })();
  IV.ClientDimensions = ClientDimensions;
  var PlayerRectangle = (function() {
    function PlayerRectangle(_left, _top, _width, _height) {
      this._left = IntegerUtils.toInteger(_left);
      this._top = IntegerUtils.toInteger(_top);
      this._width = IntegerUtils.toInteger(_width);
      this._height = IntegerUtils.toInteger(_height);
    }
    PlayerRectangle.prototype.toString = function() {
      return this._left + ',' + this._top + ',' + this._width + ',' + this._height;
    };
    PlayerRectangle.prototype.clone = function() {
      return new PlayerRectangle(this._left, this._top, this._width, this._height);
    };
    return PlayerRectangle;
  })();
  IV.PlayerRectangle = PlayerRectangle;
  var ViewabilityCheckResult = (function() {
    function ViewabilityCheckResult(
      _status,
      _checkMethod,
      _viewablePercentage,
      _clientDimensions,
      _playerRectangle,
      _focusState,
      _volume,
      _iframeState
    ) {
      if (_status === void 0) {
        _status = ViewabilityCheckResult.Status.UNKNOWN;
      }
      if (_checkMethod === void 0) {
        _checkMethod = ViewabilityCheckResult.CheckMethod.NONE;
      }
      if (_viewablePercentage === void 0) {
        _viewablePercentage = 0;
      }
      if (_clientDimensions === void 0) {
        _clientDimensions = new ClientDimensions(0, 0);
      }
      if (_playerRectangle === void 0) {
        _playerRectangle = new PlayerRectangle(0, 0, 0, 0);
      }
      if (_focusState === void 0) {
        _focusState = ViewabilityCheckResult.FocusState.OFF;
      }
      if (_volume === void 0) {
        _volume = 0;
      }
      if (_iframeState === void 0) {
        _iframeState = ViewabilityCheckResult.IFrameState.NOT_IN_IFRAME;
      }
      this.status = ViewabilityCheckResult.Status.UNKNOWN;
      this.viewablePercentage = 0;
      this.clientDimensions = new ClientDimensions(0, 0);
      this.playerRectangle = new PlayerRectangle(0, 0, 0, 0);
      this.focusState = ViewabilityCheckResult.FocusState.OFF;
      this.volume = 0;
      this.checkMethod = ViewabilityCheckResult.CheckMethod.NONE;
      this.iframeState = ViewabilityCheckResult.IFrameState.NOT_IN_IFRAME;
      this.percentObscured = 0;
      this.status = _status;
      this.viewablePercentage = _viewablePercentage;
      this.clientDimensions = _clientDimensions;
      this.playerRectangle = _playerRectangle;
      this.focusState = _focusState;
      this.volume = _volume;
      this.checkMethod = _checkMethod;
      this.iframeState = _iframeState;
      this.percentObscured = 0;
    }
    Object.defineProperty(ViewabilityCheckResult, 'Status', {
      get: function() {
        return { OK: 1, NO_ACCESS: -1, PLAYER_NOT_FOUND: -2, IN_IFRAME: -3, UNKNOWN: -4 };
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(ViewabilityCheckResult, 'CheckMethod', {
      get: function() {
        return { NONE: -1, GEOMETRY: 0, BEACON: 1, IO: 2, CSS_INVISIBILITY: 3, DOM_OBSCURING: 4, FULL_SCREEN: 5 };
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(ViewabilityCheckResult, 'FocusState', {
      get: function() {
        return { OFF: 0, ON: 1 };
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(ViewabilityCheckResult, 'IFrameState', {
      get: function() {
        return { NOT_IN_IFRAME: 0, IN_IFRAME: 1 };
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(ViewabilityCheckResult, 'VIEWABLE_PERCENTAGE', {
      get: function() {
        return 50;
      },
      enumerable: true,
      configurable: true,
    });
    ViewabilityCheckResult.prototype.toString = function() {
      return (
        this.status +
        ';' +
        (IntegerUtils.toInteger(this.viewablePercentage) + ';') +
        (this.clientDimensions.toString() + ';') +
        (this.playerRectangle.toString() + ';') +
        (this.focusState + ';') +
        (IntegerUtils.toInteger(this.volume) + ';') +
        '1;' +
        (this.checkMethod + ';') +
        ('' + this.iframeState)
      );
    };
    ViewabilityCheckResult.prototype.clone = function() {
      var clientDimensions = this.clientDimensions ? this.clientDimensions.clone() : this.clientDimensions;
      var playerRectangle = this.playerRectangle ? this.playerRectangle.clone() : this.playerRectangle;
      return new ViewabilityCheckResult(
        this.status,
        this.checkMethod,
        this.viewablePercentage,
        clientDimensions,
        playerRectangle,
        this.focusState,
        this.volume,
        this.iframeState
      );
    };
    ViewabilityCheckResult.prototype.isMeasurable = function() {
      return this.status === ViewabilityCheckResult.Status.OK;
    };
    ViewabilityCheckResult.prototype.isViewable = function() {
      return this.isMeasurable() && this.isInViewableSpace() && this.isInFocus();
    };
    ViewabilityCheckResult.prototype.isInViewableSpace = function() {
      return this.viewablePercentage >= ViewabilityCheckResult.VIEWABLE_PERCENTAGE;
    };
    ViewabilityCheckResult.prototype.isInFocus = function() {
      return this.focusState === ViewabilityCheckResult.FocusState.ON;
    };
    return ViewabilityCheckResult;
  })();
  IV.ViewabilityCheckResult = ViewabilityCheckResult;
})(IV || (IV = {}));
var IV;
(function(IV) {
  var ViewabilityIframeDetector = (function() {
    function ViewabilityIframeDetector() {}
    Object.defineProperty(ViewabilityIframeDetector, 'IFRAME_TYPE_EVENT_ID', {
      get: function() {
        return 'viewability_iframe_type';
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(ViewabilityIframeDetector, 'IFRAME_TYPES', {
      get: function() {
        return { FRIENDLY: 'friendly', NON_FRIENDLY: 'non_friendly', INLINE: 'inline' };
      },
      enumerable: true,
      configurable: true,
    });
    ViewabilityIframeDetector.isIframe = function(contextWindow) {
      return contextWindow.top !== contextWindow;
    };
    ViewabilityIframeDetector.isCrossdomainIframe = function(contextWindow) {
      var contextDocument = contextWindow.document;
      try {
        var referrerDomain = this.getDomainFromFullUrl(contextDocument.referrer);
        if (!ViewabilityIframeDetector.isIframe(contextWindow)) {
          return false;
        } else if (referrerDomain && contextDocument.domain && contextDocument.domain !== referrerDomain) {
          return true;
        } else if (contextWindow.top.document.domain === contextWindow.document.domain) {
          return false;
        }
      } catch (ignore) {}
      return true;
    };
    ViewabilityIframeDetector.reportIframeType = function(globalCoreEventsId, contextWindow) {
      var detector = {
        isFriendly: function() {
          return (
            ViewabilityIframeDetector.isIframe(contextWindow) &&
            !ViewabilityIframeDetector.isCrossdomainIframe(contextWindow)
          );
        },
        isInline: function() {
          return !ViewabilityIframeDetector.isIframe(contextWindow);
        },
      };
      var iframeType = detector.isInline()
        ? ViewabilityIframeDetector.IFRAME_TYPES.INLINE
        : detector.isFriendly()
        ? ViewabilityIframeDetector.IFRAME_TYPES.FRIENDLY
        : ViewabilityIframeDetector.IFRAME_TYPES.NON_FRIENDLY;
      IV.Events.trigger(globalCoreEventsId + ':' + ViewabilityIframeDetector.IFRAME_TYPE_EVENT_ID, iframeType);
    };
    ViewabilityIframeDetector.getDomainFromFullUrl = function(url) {
      if (url) {
        var a = document.createElement('a');
        a.href = url;
        return a.hostname;
      }
      return null;
    };
    return ViewabilityIframeDetector;
  })();
  IV.ViewabilityIframeDetector = ViewabilityIframeDetector;
})(IV || (IV = {}));
