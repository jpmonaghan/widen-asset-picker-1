<%@ page language="java" contentType="text/html;charset=UTF-8" %>
<%@ taglib prefix="template" uri="http://www.jahia.org/tags/templateLib" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="jcr" uri="http://www.jahia.org/tags/jcr" %>
<%@ taglib prefix="ui" uri="http://www.jahia.org/tags/uiComponentsLib" %>
<%@ taglib prefix="functions" uri="http://www.jahia.org/tags/functions" %>
<%@ taglib prefix="query" uri="http://www.jahia.org/tags/queryLib" %>
<%@ taglib prefix="utility" uri="http://www.jahia.org/tags/utilityLib" %>
<%@ taglib prefix="s" uri="http://www.jahia.org/tags/search" %>
<%--@elvariable id="currentNode" type="org.jahia.services.content.JCRNodeWrapper"--%>
<%--@elvariable id="out" type="java.io.PrintWriter"--%>
<%--@elvariable id="script" type="org.jahia.services.render.scripting.Script"--%>
<%--@elvariable id="scriptInfo" type="java.lang.String"--%>
<%--@elvariable id="workspace" type="java.lang.String"--%>
<%--@elvariable id="renderContext" type="org.jahia.services.render.RenderContext"--%>
<%--@elvariable id="currentResource" type="org.jahia.services.render.Resource"--%>
<%--@elvariable id="url" type="org.jahia.services.render.URLGenerator"--%>

<c:set var="nodeType" value="${currentNode.properties['wden:assetType'].string}"/>
<c:set var="widenNode" value="${currentNode.properties['wden:extAsset'].node}"/>
<c:set var="jContentNode" value="${currentNode.properties['wden:intAsset'].node}"/>

<utility:logger level="INFO" value="*** nodeType : ${nodeType}"/>
<utility:logger level="INFO" value="*** widenNode : ${widenNode}"/>

<c:if test="${renderContext.editMode}" >
<div>
    <span style="color:#ccc;">Edit widen test</span>
</c:if>
<c:choose>
    <c:when test="${nodeType eq 'extAsset'}">
        <template:module node="${widenNode}" editable="true">
            <template:param name="widths" value="256,512"/>
            <template:param name="defaultWidth" value="512"/>
        </template:module>
    </c:when>
    <c:otherwise>
        <template:module node="${jContentNode}" editable="false"/>
    </c:otherwise>
</c:choose>
<c:if test="${renderContext.editMode}" >
</div>
</c:if>