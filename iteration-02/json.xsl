<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="html" />
    <xsl:include href="user.xsl" />
    <xsl:include href="group.xsl" />
    <xsl:include href="event.xsl" />

    <xsl:template match="/social">
    <xsl:text>{</xsl:text>
            <xsl:text>"users": [</xsl:text>
            <xsl:apply-templates select="users/user" />
            <xsl:text>],</xsl:text>
            
            <xsl:text>"groups": [</xsl:text>
            <xsl:apply-templates select="groups/group" />
            <xsl:text>],</xsl:text>
            
            <xsl:text>"events": [</xsl:text>
            <xsl:apply-templates select="events/event" />
            <xsl:text>]</xsl:text>
    <xsl:text>}</xsl:text>
    </xsl:template>
</xsl:stylesheet>